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
      BialikFarm: "Bialik Farm",
      Information: "Information",
      Home: "Home",
      yourName: "your name",
      phone: "phone",
      message: "message",
      SendMessage: "Send Message",
      farmInfo: "Farm Info",
      farmInfoDescription: "Farm Info Description",
      ourstory: "our story",
      name: "name",
      email:"email",
      phoneNumber:"phone number",
      gettingInfo: "getting info",
      send: "send",
      orderNow: "order the best aquipment in the best prices",
      itemName: "item name",
      toMoreDetails: "to more details",
      farmTour: "farm Tour",
      age:"age",
      description: "description",
      adminConnect:"admin Connect",
      meetOurHorses: "meet Our Horses",
      meetOurFacilities: "meet Our Facilities"
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
      BialikFarm: "המרכז לרכיבה כפר ביאליק",
      Information: "פרטים",
      Home: "לעמוד הבית",
      yourName: "שם מלא",
      phone: "מספר טלפון",
      message: "הודעה לחווה",
      SendMessage: "שלח",
      farmInfo: "בואו להכיר את החווה",
      farmInfoDescription: "הכירו את הסוסים, הצוות והרוכבים",
      ourstory: "הסיפור שלנו",
      name: "שם",
      email: "אימייל",
      phoneNumber: "מספר טלפון",
      gettingInfo: "מעוניין בקבלת מידע בטלפון ובאימייל",
      send: "שלח",
      orderNow: "מוצרי הסוסים הסוסים שתוכלו לקנות בחווה - הטובים ביותר במחירים הטובים ביותר",
      itemName: "שם המוצר",
      toMoreDetails: "*על מנת להזמין את הציוד - נא לדבר על משה",
      farmTour: "לסיור בחווה",
      age: "גיל",
      description: "הסבר",
      adminConnect: "חיבור מנהל",
      meetOurHorses: "הכירו את הסוסים שלנו",
      meetOurFacilities: "הכירו את המתקנים שלנו"
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: "he",
  debug: true,
  resources,
});

export default i18n;
