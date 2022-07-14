import React, { useEffect, useState } from 'react';
import '../../Styling/about-me.less';
import { Breakpoint } from 'react-socks';
import '../../Styling/contact-me.less';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationPin } from 'react-icons/md';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
import { Input, Page, Button, Textarea } from '@mobiscroll/react-lite';
import ClipLoader from 'react-spinners/ClipLoader';
import '../../Styling/common-variables.less';

export const ContactMeComponent = (): JSX.Element => {
    return (
        <>
            <Breakpoint className="content-container" small down>
                <ContactInformationContainer />
                <ContactContainer />
            </Breakpoint>
                <Header title="Contact information"></Header>
                    <div className="content-container">
                        <div className="main-left-container ">
                            <ContactInformationContainer />
                        </div>
                        <div className="main-right-container">
                            <ContactContainer />
                        </div>
                    </div>
                </div>
            </Breakpoint>
        </>
    );
};
export const ImageContainer = () => (
    <div className="contact-me-image-container">
        <img className="half-image-circle grow" src="../Resources/startpage-image.jpg" alt="" />
    </div>
);
const ContactContainer = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');
    useEffect(() => {
        setNameError('');
        setSubmitError('');
    }, [name]);
    useEffect(() => {
        setMessageError('');
        setSubmitError('');
    }, [message]);
    useEffect(() => {
        if (emailSent) {
            setMessage('');
            setName('');
            setLoading(false);
            setEmailSent(false);
        }
    }, [emailSent]);
    useEffect(() => {
        if (submitError.length > 0) {
            setLoading(false);
        }
    }, [submitError]);

    const validateForm = () => {
        let isValid = true;

        const nameIsNotValid = name.length > 40;
        if (nameIsNotValid) {
            setNameError('Name has to be less than 40 characters long.');
            isValid = false;
        }

        const messageIsNotValid = message.length < 5;
        if (messageIsNotValid) {
            setMessageError('Message needs to be over 5 characters.');
            isValid = false;
        }
        return isValid;
    };
    const sendMessage = () => {
        setSubmitError('');
        const isValid = validateForm();
        if (isValid) {
            setLoading(true);

            sendEmail();
        }
    };
    function sendEmail() {
        const body = { message: message, name: name };
        fetch(`${process.env.BASE_URL}/sendEmail`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then(() => {
            setEmailSent(true);
        });
    }
    return (
        <>
            <Page>
                <div className="mbsc-form-group">
                    <div className="mbsc-form-group-title">Contact me</div>
                    <Input
                        name="email"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        errorMessage={nameError}
                    >
                        Name
                    </Input>
                    <Textarea
                        name="message"
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                        errorMessage={messageError}
                    >
                        Message *
                    </Textarea>
                    <Button onClick={() => sendMessage()} disabled={loading}>
                        Send
                        <ClipLoader color="#ffffff" loading={loading} size={25} />
                    </Button>
                    <span className="mbsc-err-msg">{submitError}</span>
                </div>
            </Page>
        </>
    );
};

const ContactInformationContainer = () => {
    return (
        <div className="contact-info-container">
            <InformationContainer icon={<HiOutlineMail />} contactInformationText="Email">
                <a href={`mailto:merisrnn@gmail.com`}>
                    <p>merisrnn@gmail.com</p>
                </a>
            </InformationContainer>

            <InformationContainer icon={<MdLocationPin />} contactInformationText="Location">
                <p>Turku, Finland</p>
            </InformationContainer>
        </div>
    );
};
interface HalfImageProps {
    icon: JSX.Element;
    children: JSX.Element;
    contactInformationText: string;
}

const InformationContainer = ({ icon, contactInformationText, children }: HalfImageProps): JSX.Element => {
    return (
        <div className="contact-info">
            <div className="contact-info-icon-container">{icon}</div>
            <div className="contact-info-text">
                <div>{contactInformationText}</div>
                {children}
            </div>
        </div>
    );
};
