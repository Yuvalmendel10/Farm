import { useState, FC, useEffect } from "react";
import "./App.css";
import farmBirthday from "./assets/farmBirthday.jpg";
import farmImage2 from "./assets/farmImage2.jpg";
import farmImage3 from "./assets/farmImage3.jpg";
import horseWhiteBackground from "./assets/horseWhiteBackground.jpg";
import IActivity from "./interfaces/IActivity";
import Activity from "./Components/activity/Activity";
import { v4 } from "uuid";
import InfoFromClient from "./Components/infoFromClient/InfoFromClient";
import MeetFarmCard from "./Components/meetFarm/MeetFarmCard";
import OurStory from "./Components/ourStory/OurStory";
import BuyAquipmentHome from "./Components/buyAquipment/BuyAquipmentHome";
import ScrollToTop from "./Components/scrollToTop/ScrollToTop";

const Home: FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([
    {
      id: v4(),
      name: "camp",
      image: farmImage3,
      description: "campDescription",
    },
    {
      id: v4(),
      name: "ridingTraining",
      image: farmImage2,
      description: "ridingTrainingDescription",
    },
    {
      id: v4(),
      name: "birthdayParty",
      image: farmBirthday,
      description: "birthdayDescription",
    },
    {
      id: v4(),
      name: "farmTour",
      image: farmBirthday,
      description: "birthdayDescription",
    },
  ]);

  return (
    <div>
      <ScrollToTop />
      <div className=" ">
        <div className="grid2 forMargin">
          {activities.map((activity) => (
            <Activity activity={activity} key={activity.id} />
          ))}
        </div>
        <div className="horse">
          🐎
          {/* <img src={horseWhiteBackground} width="300" height="200" alt="" /> */}
        </div>
        <div className="meetFarmCard ">
          <MeetFarmCard />
        </div>
      </div>
      <div>
        <OurStory />
      </div>
      <div className="grid3">
        <div>
          <BuyAquipmentHome />
        </div>
        <div>
          <InfoFromClient />
        </div>
      </div>
      <div className="horse2">
        <h3>Click The Horse Or Hit The Tab Key To See Her Run</h3>
        <img
          className="horseImg"
          tabIndex={1}
          src="http://cliparts.co/cliparts/8Tz/Byj/8TzByjyTp.gif"
          alt="Running Horse"
        />
      </div>
    </div>
  );
};

export default Home;
