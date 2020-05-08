import ReactGA from "react-ga";

class Analytics {
  static initialize = (
    trackingId: string,
    args: ReactGA.InitializeOptions | undefined
  ) => {
    ReactGA.initialize(trackingId, args);
    Analytics.enabled = true;
  };

  static enable = () => {
    Analytics.enabled = true;
  };

  static disable = () => {
    Analytics.enabled = false;
  };

  static set = (fieldsObject: any) => {
    !!Analytics.enabled && ReactGA.set(fieldsObject);
  };

  static pageview = (
    rawPath?: string,
    trackerNames?: string[] | undefined,
    title?: string
  ) => {
    !!Analytics.enabled &&
      ReactGA.pageview(
        rawPath || window.location.pathname + window.location.search,
        trackerNames,
        title
      );
  };

  static modalview = (modalName: string) => {
    !!Analytics.enabled && ReactGA.modalview(modalName);
  };

  static event = (
    args: ReactGA.EventArgs,
    trackerNames: string[] | undefined
  ) => {
    !!Analytics.enabled && ReactGA.event(args, trackerNames);
  };

  static timing = (args: ReactGA.TimingArgs) => {
    !!Analytics.enabled && ReactGA.timing(args);
  };

  static ga = (...args: ReactGA.TimingArgs[]) => {
    !!Analytics.enabled && ReactGA.ga(...args);
  };

  static exception = (
    args: ReactGA.TimingArgs,
    trackerNames: string[] | undefined
  ) => {
    !!Analytics.enabled && ReactGA.exception(args, trackerNames);
  };
  static enabled: boolean;
}

export default Analytics;
