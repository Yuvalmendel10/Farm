import { FC, useEffect, useState } from "react";
import { v4 } from "uuid";
import IFarmInfo from "../../interfaces/IFarmInfo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import bialikFarm from "../../assets/bialikFarm.jpg";
import bialikFarm2 from "../../assets/bialikFarm2.jpg";
import bialikFarm3 from "../../assets/bialikFarm3.jpg";
import bialikFarm4 from "../../assets/bialikFarm4.jpg";
import bialikFarm5 from "../../assets/bialikFarm5.jpg";

const MeetFarmCard: FC = () => {
  const images = [
    bialikFarm,
    bialikFarm2,
    bialikFarm3,
    bialikFarm4,
    bialikFarm5,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [farmInfo, setFarmInfo] = useState<IFarmInfo>({
    id: v4(),
    name: "farmInfo",
    image: images,
    description: "farmInfoDescription",
  });

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
        onClick={() => navigate(`/${farmInfo.name}`)}
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
