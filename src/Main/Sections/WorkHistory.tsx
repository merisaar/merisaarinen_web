import React from 'react';
import '../../Styling/work-history.less';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdOutlineWorkOutline, MdSchool } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import 'react-vertical-timeline-component/style.min.css';

export const WorkHistoryComponent = (): JSX.Element => {
    return (
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2019 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Solution developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">If insurances</h4>
                    <p>Fullstack, Scrum master</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Software developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lowell</h4>
                    <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Junior Software developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lindorff</h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Trainee</h3>
                    <h4 className="vertical-timeline-element-subtitle">ABB</h4>
                    <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Content Marketing for Web, Mobile and Social Media
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>Strategy, Social Media</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>Creative Direction, User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bachelor of Science in Interactive Digital Media Visual Imaging
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>Creative Direction, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<AiOutlineStar />}
                />
            </VerticalTimeline>
        </>
    );
};

export const ImageContainer = () => (
    <div className="work-history-image-container">
        <img className="half-image-circle grow" src="../Resources/startpage-image.jpg" alt="" />
    </div>
);

// export const WorkHistory = () => (
//     <div className="work-history-container">
//         <div>
//         </div>
//     </div>
// );
