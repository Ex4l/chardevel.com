import cursusData from "@content/cv/fr-FR/cursus.json";
import React from "react";
import { MdSchool, MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "src/styles/cursus.css";
import { today } from "src/utils/dateUtils";

const Cursus = () => (
  <div className="cursus-container">
    <h2>{cursusData.title}</h2>
    <VerticalTimeline>
      {cursusData.content.experience.map((experience, index) => {
        const firstLine = index === 0;
        const icon = experience.type === "work" ? <MdWork /> : <MdSchool />;

        return (
          <VerticalTimelineElement
            key={`${experience}-${index}`}
            className="vertical-timeline-element"
            contentArrowStyle={{
              borderRight: "7px solid #ddd",
            }}
            date={
              firstLine
                ? `${experience.time} ${today.getFullYear()}`
                : experience.time
            }
            dateClassName={"cursusDate"}
            iconStyle={{ background: "#5BC0EB", color: "#fff" }}
            icon={icon}
          >
            <h3>{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.place}
            </h4>
            <p>{experience.subtitle}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  </div>
);

export default Cursus;
