import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@mui/material";
//import "./Activity.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IActivity from "../../interfaces/IActivity";
import { useNavigate } from "react-router-dom";

type Props = {
  activity: IActivity;
  name: string;
};

const Activity: FC<Props> = (props: Props) => {
  const { activity, name } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const goToPage = (name: string) => {
  //   switch (name) {
  //     case "capm":
  //       navigate("/camp");
  //       break;
  //     case "ridingTraining":
  //       navigate("/ridingTraining");
  //       break;
  //     case "birthdayParty":
  //       navigate("/birthdayParty");
  //       break;
  //     default:
  //       navigate("/fndvjfn");
  //   }
  // };

  return (
    <div className="activities">
      <Card
        id={activity.name}
        className="activity"
        sx={{ maxWidth: 345 }}
        //onClick={() => goToPage(name)}
        onClick={() => navigate(`/${name}`)}
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
