import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      camp: "camp",
      ridingTraining: "riding training",
      campDescription: "Join to our new summer camp",
      ridingTrainingDescription: "come and upgrade your abilities",
      birthdayParty: "birthday party",
      birthdayDescription:
        "come and celebrate your birthday with us in the farm",
    },
  },
  he: {
    translation: {
      camp: "קורסים לילדים",
      ridingTraining: "שיעורי רכיבה ",
      campDescription: "הצטרפו למחנה הקיץ החדש שלנו",
      ridingTrainingDescription: "בואו ושפרו את יכולות הרכיבה שלכם",
      birthdayParty: " ימי הולדת",
      birthdayDescription: " בואו ותחגגו איתנו את יום ההולדת שלכם בחווה",
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: "he",
  debug: true,
  resources,
});

export default i18n;
