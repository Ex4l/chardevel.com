import MeData from "@content/cv/me.json";
import React from "react";

const Me = () => (
  <div>
    <h1>
      {MeData.content.firstName} {MeData.content.lastName} -{" "}
      {MeData.content.job}
    </h1>
    <h2>{MeData.content.phoneNumber}</h2>
    <h2>{MeData.content.mailAdress}</h2>
  </div>
);

export default Me;