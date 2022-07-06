import React from 'react';
import '../../Styling/work-history.less';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdOutlineWorkOutline, MdSchool } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import 'react-vertical-timeline-component/style.min.css';
import '../../Styling/common.less';

export const WorkHistoryComponent = (): JSX.Element => {
    const workColor = '#C42348';
    const studyIconColor = '#E95D70';
    const starColor = '#9B1C2F';
    const lightAccentColor = '#fff';
    return (
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: workColor, color: lightAccentColor }}
                    contentArrowStyle={{ borderRight: `7px solid  ${workColor}` }}
                    date="2019 - present"
                    iconStyle={{ background: workColor, color: lightAccentColor }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Solution developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">If insurances</h4>
                    <p>Fullstack development with .NET and React/AngularJS, Scrum master</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Summer 2019"
                    iconStyle={{ background: workColor, color: lightAccentColor }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Software developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lowell</h4>
                    <p>Front-end development with React</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Summer 2018"
                    iconStyle={{ background: workColor, color: lightAccentColor }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Junior Software developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lindorff</h4>
                    <p>Fullstack development with Javascript and .NET</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{ background: workColor, color: lightAccentColor }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Trainee</h3>
                    <h4 className="vertical-timeline-element-subtitle">ABB</h4>
                    <p>Data and program management</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018-2021"
                    iconStyle={{ background: studyIconColor, color: lightAccentColor }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science in Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Masters Degree</h4>
                    <p>Software development, architecture and testing</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015-2018"
                    iconStyle={{ background: studyIconColor, color: lightAccentColor }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelors of Science (Technology)</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor Degree in Information and Communication Technologies
                    </h4>
                    <p>Software development in practice and in theory</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: starColor, color: lightAccentColor }}
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
