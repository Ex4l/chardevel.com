import Hobby from "@components/cv/Hobby";
import HobbiesData from "@content/cv/hobbies.json";
import React from "react";
import "src/styles/hobbies.css";

const Hobbies = () => (
  <div>
    <h2>{HobbiesData.title}</h2>
    <div className="hobbies-container">
      {HobbiesData.content.map((item, index) => {
        return <Hobby item={item} />;
      })}
    </div>
  </div>
);

export default Hobbies;
