import { useState } from "react";
import "./App.css";
import kidWithHorse from "./assets/kidWithHorse.jpg";
import horseBirthday from "./assets/horseBirthday.jpg";
//import horses from "./assets/horses.jpg";
import IActivity from "./interfaces/IActivity";
import Activity from "./Components/activity/Activity";
import { v4 } from "uuid";

function Home() {
  const [activities, setActivities] = useState<IActivity[]>([
    {
      id: v4(),
      name: "camp",
      image: kidWithHorse,
      description: "campDescription",
    },
    {
      id: v4(),
      name: "ridingTraining",
      image: kidWithHorse,
      description: "ridingTrainingDescription",
    },
    {
      id: v4(),
      name: "birthdayParty",
      image: horseBirthday,
      description: "birthdayDescription",
    },
  ]);

  return (
    <>
      <div className="activities">
        {activities.map((activity) => (
          <Activity
            activity={activity}
            name={activity.name}
            key={activity.id}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
