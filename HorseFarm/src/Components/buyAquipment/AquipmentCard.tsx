import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import IItem from "../../interfaces/IItem";

type Props = {
  item: IItem;
};

const AquipmentCard: FC<Props> = ({ item }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="">
        <div
          id={item.id}
          onClick={() => navigate(`/${name}`)}
          className="card mb-3 text-white bg-light p-0 border-light activity2 shadow"
        >
          <img src={item.image} className="card-img-top " alt="Card image" />
          <div className="card-body textcardborder ">
            <h5 className="card-title text-black fw-bold">{t(item.name)}</h5>
            <h5 className="card-title text-black fw-bold">
              {`price -   ${item.price}`}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquipmentCard;
