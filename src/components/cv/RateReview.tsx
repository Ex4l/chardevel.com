import React, { FunctionComponent } from "react";
import { GiRoundBottomFlask } from "react-icons/gi";
import useWindowSize from "src/hooks/useWindowSize";

interface IProps {
  rate: number;
}

const returnView = (rate: number) => {
  const view = [];
  const size = useWindowSize();
  const flaskSize = size.width! > 620 ? 24 : 16;

  for (let i = 0; i < 10; i++) {
    view.push(
      <GiRoundBottomFlask
        key={`${rate}-${i}`}
        size={flaskSize}
        className={`rate-flask-${i > rate ? `empty` : `full`}`}
      />
    );
  }

  return view;
};

const RateReview: FunctionComponent<IProps> = ({ rate }) => {
  return <div key={rate}>{returnView(rate)}</div>;
};

export default RateReview;
