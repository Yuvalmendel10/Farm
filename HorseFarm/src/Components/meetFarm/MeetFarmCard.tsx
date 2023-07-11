import { FC, useEffect, useState } from "react";
import IFarmInfo from "../../interfaces/IFarmInfo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  farmInfo: IFarmInfo;
};

const MeetFarmCard: FC<Props> = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { farmInfo, name } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        currentIndex == farmInfo.image.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="">
      <div
        id={farmInfo.name}
        className="card text-white bg-dark mb-3 activity p-0 border-light shadow"
        onClick={() => navigate(`/${name}`)}
      >
        <img
          className="card-img shadow"
          src={farmInfo.image[currentIndex]}
          alt="Card image "
        />
        <div className="card-img-overlay d-flex justify-content-center shadow">
          <div className="atag ">
            <h5 className="card-title text-dark  fw-bold">
              {t(farmInfo.name)}
            </h5>
            <p className="card-text text-dark">{t(farmInfo.description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetFarmCard;
