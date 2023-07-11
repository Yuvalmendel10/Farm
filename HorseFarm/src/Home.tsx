import { useState } from "react";
import "./App.css";
import farmBirthday from "./assets/farmBirthday.jpg";
import farmImage1 from "./assets/farmImage1.jpg";
import farmImage2 from "./assets/farmImage2.jpg";
import farmImage3 from "./assets/farmImage3.jpg";
import bialikFarm from "./assets/bialikFarm.jpg";
import bialikFarm2 from "./assets/bialikFarm2.jpg";
import bialikFarm3 from "./assets/bialikFarm3.jpg";
import bialikFarm4 from "./assets/bialikFarm4.jpg";
import bialikFarm5 from "./assets/bialikFarm5.jpg";
import IActivity from "./interfaces/IActivity";
import IFarmInfo from "./interfaces/IFarmInfo";
import Activity from "./Components/activity/Activity";
import { v4 } from "uuid";
import InfoFromClient from "./Components/infoFromClient/InfoFromClient";
import MeetFarmCard from "./Components/meetFarm/MeetFarmCard";
import OurStory from "./Components/ourStory/OurStory";
import BuyAquipment from "./Components/buyAquipment/BuyAquipment";

function Home() {
  const images = [
    bialikFarm,
    bialikFarm2,
    bialikFarm3,
    bialikFarm4,
    bialikFarm5,
  ];
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
      name: "lesiur bahava",
      image: farmBirthday,
      description: "birthdayDescription",
    },
  ]);

  const [farmInfo, setFarmInfo] = useState<IFarmInfo>({
    id: v4(),
    name: "farmInfo",
    image: images,
    description: "farmInfoDescription",
  });

  return (
    <div>
      <div className="grid ">
        <div className="grid2 ">
          {activities.map((activity) => (
            <Activity
              activity={activity}
              name={activity.name}
              key={activity.id}
            />
          ))}
        </div>
        <div className="">
          <MeetFarmCard farmInfo={farmInfo} name={farmInfo.name} />
          <InfoFromClient />
        </div>
      </div>
      <div>
        <OurStory />
      </div>
      <div>
        <BuyAquipment />
      </div>
    </div>
  );
}

export default Home;
