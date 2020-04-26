import Client from "@components/cv/Client";
import ClientsData from "@content/cv/clients.json";
import React from "react";
import { useTranslation } from "react-i18next";
import "src/styles/clients.css";

const Clients = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t(ClientsData.title)}</h2>
      <div className="clients-container">
        {ClientsData.content.map((item, index) => {
          return <Client key={`${index}-${item.title}`} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Clients;
