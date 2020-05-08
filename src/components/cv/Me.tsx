import MeData from "@content/cv/me.json";
import React from "react";
import { useTranslation } from "react-i18next";
import events from "../service/analytics/events";

const Me = () => {
  const { t } = useTranslation();
  const mail = MeData.content.mailAdress;

  return (
    <div className="header-content">
      <h1>
        {MeData.content.firstName} {MeData.content.lastName} -{" "}
        {t(MeData.content.job)}
      </h1>
      <h2>{t(MeData.content.phoneNumber)}</h2>
      <h2>
        <a
          href={`mailto:${mail}`}
          onClick={() => {
            events.cv.click_to_contact();
          }}
        >
          {mail}
        </a>
      </h2>
    </div>
  );
};

export default Me;
