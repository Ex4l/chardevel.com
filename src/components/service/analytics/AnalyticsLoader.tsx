import { useEffect } from "react";
import Analytics from "./Analytics";

interface IProps {
  trackingId: string;
  isDebug: string;
  disabled: boolean;
}

const AnalyticsLoader = ({ trackingId, isDebug, disabled }: IProps) => {
  useEffect(() => {
    Analytics.initialize(trackingId, {
      debug: isDebug.match(/(true)/) ? true : false,
      titleCase: false,
    });

    if (disabled) {
      Analytics.disable();
    }
  });

  return null;
};

export default AnalyticsLoader;
