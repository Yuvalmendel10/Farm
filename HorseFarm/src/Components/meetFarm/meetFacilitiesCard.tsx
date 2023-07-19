import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import bialikFarm from "../../assets/bialikFarm.jpg";
import bialikFarm2 from "../../assets/bialikFarm2.jpg";
import axios, { AxiosResponse } from "axios";

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
      name: "",
      image: "",
      description: "",
    },
    // {
    //   name: "emdat rechiva",
    //   image: bialikFarm,
    //   description: "emdat rechiva",
    // },
    // {
    //   name: "mitham hasusim",
    //   image: bialikFarm2,
    //   description: "mitham hasusim",
    // },
    // {
    //   name: "mitham eruim",
    //   image: bialikFarm2,
    //   description: "mitham eruim",
    // },
    // {
    //   name: "mitham yeladim",
    //   image: bialikFarm2,
    //   description: "mitham eruim",
    // },
  ]);

  useEffect(() => {
    axios
      .get<Facility>("http://localhost:3000/api/v1/facilities")
      .then((response: AxiosResponse<Facility>) => {
        const facilitiesData: any = response.data;
        setFacilities(facilitiesData.data.facilities);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

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
      <h1>{t("meetOurFacilities")}</h1>
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
            src={"http://localhost:3000/" + facilities[currentIndex].image}
            alt="Card image "
          />
          <div className="card-img-overlay d-flex justify-content-center shadow">
            <div className="atag ">
              <h5 className="card-title text-dark  fw-bold">
                {t("name")}:{facilities[currentIndex].name}
              </h5>
              <h5 className="text-dark fw-bold">
                {t("description")}:{facilities[currentIndex].description}
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
