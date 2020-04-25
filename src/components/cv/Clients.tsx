import Client from "@components/cv/Client";
import ClientsData from "@content/cv/fr-FR/clients.json";
import React from "react";
import "src/styles/clients.css";

const Clients = () => (
  <div>
    <h2>{ClientsData.title}</h2>
    <div className="clients-container">
      {ClientsData.content.map((item, index) => {
        return <Client key={`${index}-${item.title}`} item={item} />;
      })}
    </div>
  </div>
);

export default Clients;
