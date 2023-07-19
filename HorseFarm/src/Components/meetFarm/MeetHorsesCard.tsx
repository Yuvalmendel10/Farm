import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import bialikFarm from "../../assets/bialikFarm.jpg";
import bialikFarm2 from "../../assets/bialikFarm2.jpg";
import axios, { AxiosResponse } from "axios";

type Horse = {
  name: string;
  age: number;
  image: string;
};

const MeetHorsesCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [horses, setHorses] = useState<Horse[]>([
  //   {
  //     name: "dani",
  //     age: 15,
  //     image: bialikFarm,
  //   },
  //   {
  //     name: "yossi",
  //     age: 21,
  //     image: bialikFarm2,
  //   },
  // ]);

  const [horses, setHorses] = useState<Horse[]>([
    {
      name: "",
      age: 1,
      image: "",
    },
  ]);

  useEffect(() => {
    axios
      .get<Horse>("http://localhost:3000/api/v1/horses")
      .then((response: AxiosResponse<Horse>) => {
        const horseData: any = response.data;
        setHorses(horseData.data.horses);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      currentIndex == horses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((preIndex) =>
      currentIndex == 0 ? horses.length - 1 : preIndex - 1
    );
  };

  return (
    <div>
      <h1>{t("meetOurHorses")}</h1>
      <div className="newflex">
        <button
          onClick={() => handlePrevious()}
          className="previous round shadow"
        >
          <h1> &laquo;</h1>
        </button>
        <div
          style={{ maxWidth: "800px", maxHeight: "500px" }}
          id={horses[currentIndex].name}
          className="card text-white bg-dark mb-3 activity p-0 border-light shadow"
        >
          <img
            className="card-img "
            src={"http://localhost:3000/" + horses[currentIndex].image}
            alt="Card image "
          />
          <div className="card-img-overlay d-flex justify-content-center shadow">
            <div className="atag ">
              <h5 className="card-title text-dark  fw-bold">
                {t("name")}:{horses[currentIndex].name}
              </h5>
              <h5 className="text-dark fw-bold">
                {t("age")}:{horses[currentIndex].age}
              </h5>
            </div>
          </div>
        </div>
        <button onClick={() => handleNext()} className="next round shadow">
          <h1>&raquo;</h1>
        </button>
      </div>
    </div>
  );
};

export default MeetHorsesCard;
