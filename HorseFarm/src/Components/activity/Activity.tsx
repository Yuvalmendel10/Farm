import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@mui/material";
//import "./Activity.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IActivity from "../../interfaces/IActivity";
//import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";

type Props = {
  activity: IActivity;
};

const Activity: FC<Props> = (props: Props) => {
  const { activity } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => navigate("/page");

  return (
    <div className="activities">
      <Card
        className="activity"
        sx={{ maxWidth: 345 }}
        onClick={() => handleClick()}
      >
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
    </div>
  );
};

export default Activity;
