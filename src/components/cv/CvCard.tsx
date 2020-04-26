import React, { FunctionComponent } from "react";
import "src/styles/cv-card.css";

interface IProps {
  childrenPosition?: string;
}

const CvCard: FunctionComponent<IProps> = ({ childrenPosition, children }) => {
  const className = childrenPosition
    ? `cv-card-container-${childrenPosition}`
    : "cv-card-container";
  return <div className={className}>{children}</div>;
};

export default CvCard;
