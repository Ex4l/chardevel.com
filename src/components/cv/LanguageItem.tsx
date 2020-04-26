import RateReview from "@components/cv/RateReview";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  item: { language: string; level: string; rate: number };
}

const LanguageItem: FunctionComponent<IProps> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="language-item">
      <div className="language-and-level">
        <h5 className="language-item-language">{t(item.language)}</h5>
        <div className="language-item-level">{t(item.level)}</div>
      </div>
      <div className="language-item-rate">
        <RateReview rate={item.rate} />
      </div>
    </div>
  );
};

export default LanguageItem;
