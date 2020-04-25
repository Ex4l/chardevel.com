import RateReview from "@components/cv/RateReview";
import React, { FunctionComponent } from "react";

interface IProps {
  item: { language: string; level: string; rate: number };
}

const LanguageItem: FunctionComponent<IProps> = ({ item }) => {
  return (
    <div className="language-item">
      <div className="language-and-level">
        <h5 className="language-item-language">{item.language}</h5>
        <div className="language-item-level">{item.level}</div>
      </div>
      <div className="language-item-rate">
        <RateReview rate={item.rate} />
      </div>
    </div>
  );
};

export default LanguageItem;
