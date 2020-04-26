import FlipCard from "@components/cv/FlipCard";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import BoulangerLogo from "src/images/boulanger-logo.png";
import CeLogo from "src/images/ce-logo.png";
import DecathlonLogo from "src/images/dkt-logo.jpg";
import LMLogo from "src/images/leroy-merlin-logo.jpg";
import SocGenLogo from "src/images/socgen-logo.jpeg";

interface IProps {
  item: { icon: string; title: string; subtitle: string };
}

const Client: FunctionComponent<IProps> = ({ item }) => {
  const { t } = useTranslation();

  const getBrandLogo = (logo: string): React.ReactElement => {
    switch (logo) {
      case "Décathlon":
        return (
          <div className="decathlon-logo">
            <img src={DecathlonLogo} alt="Decathlon Logo" />
          </div>
        );
      case "Société Générale":
        return (
          <div className="decathlon-logo">
            <img src={SocGenLogo} alt="SocGen Logo" />
          </div>
        );
      case "Boulanger":
        return (
          <div className="decathlon-logo">
            <img src={BoulangerLogo} alt="Boulanger Logo" />
          </div>
        );
      case "Caisse d'Epargne":
        return (
          <div className="decathlon-logo">
            <img src={CeLogo} alt="Caisse D'Epargne Logo" />
          </div>
        );
      case "Leroy Merlin":
        return (
          <div className="decathlon-logo">
            <img src={LMLogo} alt="Leroy Merlin Logo" />
          </div>
        );
    }
    return <img />;
  };

  const getBackgroundColor = (brand: string) => {
    switch (brand) {
      case "Décathlon":
        return "#1574ae";
      case "Société Générale":
        return "#e2002f";
      case "Boulanger":
        return "#e65213";
      case "Caisse d'Epargne":
        return "#cd1a2d";
      case "Leroy Merlin":
        return "#48b72c";
    }
    return "white";
  };

  return (
    <FlipCard
      icon={getBrandLogo(t(item.title))}
      back={
        <div>
          <h4 className="client-title">{t(item.title)}</h4>
          <br />
          <h6 className="client-subtitle">{t(item.subtitle)}</h6>
        </div>
      }
      style={{
        width: "160px",
        height: "160px",
        frontBackgroundColor: "white",
        backBackgroundColor: getBackgroundColor(t(item.title)),
      }}
    />
  );
};

export default Client;
