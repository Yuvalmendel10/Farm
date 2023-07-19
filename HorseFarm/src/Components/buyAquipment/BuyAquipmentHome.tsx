import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import items2 from "../../assets/items2.jpg";

const BuyAquipmentHome: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="">
      <div
        id={""}
        onClick={() => navigate("/buyAquipment")}
        className="card mb-3 text-dark bg-light p-0 border-light activity2 shadow"
      >
        <div className="card-body textcardborder ">
          <h4>order new products now</h4>
        </div>
        <img src={items2} className="card-img-top " alt="Card image" />
      </div>
    </div>
  );
};

export default BuyAquipmentHome;
