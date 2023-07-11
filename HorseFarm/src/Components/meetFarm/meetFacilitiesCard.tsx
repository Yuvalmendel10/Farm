import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import bialikFarm from "../../assets/bialikFarm.jpg";
import bialikFarm2 from "../../assets/bialikFarm2.jpg";

type Facility = {
  name: string;
  description: string;
  image: string;
};

const MeetFacilitiesCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [facilities, setFacilities] = useState<Facility[]>([
    {
      name: "emdat rechiva",
      image: bialikFarm,
      description: "emdat rechiva",
    },
    {
      name: "mitham hasusim",
      image: bialikFarm2,
      description: "mitham hasusim",
    },
    {
      name: "mitham eruim",
      image: bialikFarm2,
      description: "mitham eruim",
    },
    {
      name: "mitham yeladim",
      image: bialikFarm2,
      description: "mitham eruim",
    },
  ]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      currentIndex == facilities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((preIndex) =>
      currentIndex == 0 ? facilities.length - 1 : preIndex - 1
    );
  };

  return (
    <div>
      <h1>meet our facilities</h1>
      <div className="newflex">
        <button
          onClick={() => handlePrevious()}
          className="previous round m-0 shadow"
        >
          <h1> &laquo;</h1>
        </button>
        <div
          style={{ maxWidth: "800px", maxHeight: "500px" }}
          id={facilities[currentIndex].name}
          className="card text-white bg-dark mb-3 activity p-0 border-light shadow"
        >
          <img
            className="card-img "
            src={facilities[currentIndex].image}
            alt="Card image "
          />
          <div className="card-img-overlay d-flex justify-content-center shadow">
            <div className="atag ">
              <h5 className="card-title text-dark  fw-bold">
                {t("name: ")}
                {t(facilities[currentIndex].name)}
              </h5>
              <h5 className="text-dark fw-bold">
                {t("description: ")}
                {t(facilities[currentIndex].description)}
              </h5>
            </div>
          </div>
        </div>
        <button onClick={() => handleNext()} className="next round m-0 shadow">
          <h1>&raquo;</h1>
        </button>
      </div>
    </div>
  );
};

export default MeetFacilitiesCard;
