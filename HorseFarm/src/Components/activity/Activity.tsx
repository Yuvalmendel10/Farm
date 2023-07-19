import { FC } from "react";
import { useTranslation } from "react-i18next";
import IActivity from "../../interfaces/IActivity";
import { useNavigate } from "react-router-dom";

type Props = {
  activity: IActivity;
};

const Activity: FC<Props> = (props: Props) => {
  const { activity } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        id={activity.name}
        onClick={() => navigate(`/${activity.name}`)}
        className="card mb-3 text-white bg-light p-0 border-light activity2 shadow"
      >
        <img
          src={activity.image}
          className="card-img-top shadow"
          alt="Card image"
        />
        <div className="card-body textcardborder shadow">
          <h5 className="card-title text-black fw-bold">{t(activity.name)}</h5>
          <p className="card-text text-black">{t(activity.description)}</p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
