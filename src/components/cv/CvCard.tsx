import React, { FunctionComponent } from "react";
import "src/styles/cv-card.css";

const CvCard: FunctionComponent = ({ children }) => (
  <div className="cv-card-container">{children}</div>
);

export default CvCard;
