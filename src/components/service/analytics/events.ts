import Analytics from "./Analytics";

enum AnalyticsEventCategories {
  CV = "cv",
}

const cv = {
  event: (action: string, label?: string) =>
    Analytics.event(
      { action, category: AnalyticsEventCategories.CV, label },
      undefined
    ),
  click_to_contact: () => cv.event("click_email"),
  change_language: (language: string) => cv.event("change_language", language),
};

export default { cv };
