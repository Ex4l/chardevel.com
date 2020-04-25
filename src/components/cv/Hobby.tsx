import FlipCard from "@components/cv/FlipCard";
import React, { FunctionComponent } from "react";
import {
  GiDutchBike,
  GiKnifeFork,
  GiMusicalNotes,
  GiPencilBrush,
  GiWhiteBook,
} from "react-icons/gi";

interface IProps {
  item: { icon: string; title: string; subtitle: string };
}

const Hobby: FunctionComponent<IProps> = ({ item }) => {
  const getIcon = (icon: string): React.ReactElement => {
    switch (icon) {
      case "GiKnifeFork":
        return <GiKnifeFork size={42} color="white" />;
      case "GiDutchBike":
        return <GiDutchBike size={42} color="white" />;
      case "GiMusicalNotes":
        return <GiMusicalNotes size={42} color="white" />;
      case "GiPencilBrush":
        return <GiPencilBrush size={42} color="white" />;
      case "GiWhiteBook":
        return <GiWhiteBook size={42} color="white" />;
    }
    return <GiKnifeFork size={42} color="white" />;
  };
  return (
    <FlipCard
      icon={getIcon(item.icon)}
      front={<h4 className="hobby-title">{item.title}</h4>}
      back={<h6 className="hobby-subtitle">{item.subtitle}</h6>}
      style={{
        width: "160px",
        height: "160px",
        frontBackgroundColor: "#5BC0EB",
        backBackgroundColor: "#5BC0EB",
      }}
    />
  );
};

export default Hobby;
