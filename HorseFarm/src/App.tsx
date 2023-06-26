import { Card } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import kidWithHorse from "./assets/kidhowrse.jpg";
import IActivity from "./interfaces/IActivity";

function App() {
  const { t } = useTranslation();
  const [activities, setActivities] = useState<IActivity[]>([
    {
      id: 1,
      name: "camp",
      image: kidWithHorse,
      description: "campDescription",
    },
    {
      id: 2,
      name: "ridingTraining",
      image: kidWithHorse,
      description: "ridingTrainingDescription",
    },
  ]);

  return (
    <div className="activities">
      {activities.map((activity) => (
        <Card className="activity" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={activity.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                {t(activity.name)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t(activity.description)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default App;
