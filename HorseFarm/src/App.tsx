import { useState } from "react";
import "./App.css";
import kidWithHorse from "./assets/kidhowrse.jpg";
import IActivity from "./interfaces/IActivity";
import Activity from "./Components/activity/Activity";
import { v4 } from "uuid";

function App() {
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
  ]);

  return (
    <div className="activities">
      {activities.map((activity) => (
        <Activity activity={activity} />
      ))}
    </div>
  );
}

export default App;
