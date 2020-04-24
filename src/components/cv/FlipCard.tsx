import React, { FunctionComponent } from "react";
import "src/styles/flip-card.css";

interface IProps {
  icon: React.ReactElement;
  front: React.ReactElement;
  back: React.ReactElement;
  style: {
    width: string;
    height: string;
    frontBackgroundColor: string;
    backBackgroundColor: string;
  };
}

const FlipCard: FunctionComponent<IProps> = ({ icon, front, back, style }) => {
  return (
    <div
      className="flip-card"
      style={{ width: style.width, height: style.height }}
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{
            backgroundColor: style.frontBackgroundColor,
          }}
        >
          <div className="flip-icon">{icon}</div>
          {front}
        </div>
        <div
          className="flip-card-back"
          style={{
            backgroundColor: style.backBackgroundColor,
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
