import cursusData from "@content/cv/cursus.json";
import React, { Fragment } from "react";
import { getMonthFromDate, today } from "src/utils/dateUtils";

const rootContainer = {
  backgroundColor: "#fff",
  border: "1px solid #d1d5da",
  borderRadius: "3px",
  padding: "0.9rem",
  marginTop: "1.45rem",
  marginBottom: "1.45rem",
};

const experienceContainer = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "smaller",
};

const item = { margin: "8px" };
const titleItem = { width: "300px" };
const timeItem = { width: "300px", textAlign: "center" as "center" };
const placeItem = { width: "300px", textAlign: "end" as "end" };

const monthDate = getMonthFromDate(today);
const Cursus = () => (
  <Fragment>
    <h1>{cursusData.title}</h1>
    <div style={rootContainer}>
      {cursusData.content.experience.map((experience, index) => {
        const firstLine = index === 0;

        return (
          <div style={experienceContainer} key={`${experience}-${index}`}>
            <span style={{ ...item, ...titleItem }}>{experience.title}</span>
            <span style={{ ...item, ...timeItem }}>
              {firstLine
                ? `${experience.time} ${monthDate} ${today.getFullYear()}`
                : experience.time}
            </span>
            <span style={{ ...item, ...placeItem }}>{experience.place}</span>
          </div>
        );
      })}
    </div>
  </Fragment>
);

export default Cursus;
