import React, { FunctionComponent } from "react";
import { GiRoundBottomFlask } from "react-icons/gi";

interface IProps {
  rate: number;
}

const returnView = (rate: number) => {
  const view = [];

  for (let i = 0; i < rate; i++) {
    view.push(
      <GiRoundBottomFlask
        key={`${rate}-${i}`}
        size={24}
        className="rate-flask-full"
      />
    );
  }

  while (view.length < 10) {
    view.push(
      <GiRoundBottomFlask
        key={`${rate}-${view.length + 1}`}
        size={24}
        className="rate-flask-empty"
      />
    );
  }

  return view;
};

const RateReview: FunctionComponent<IProps> = ({ rate }) => {
  return <div key={rate}>{returnView(rate)}</div>;
};

export default RateReview;
