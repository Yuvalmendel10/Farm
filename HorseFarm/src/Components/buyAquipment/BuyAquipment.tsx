import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./BuyAquipment.css";
import IItem from "../../interfaces/IItem";
import AquipmentCard from "./AquipmentCard";
import shoes from "../../assets/shoes.jpg";
import casda from "../../assets/casda.jpg";
import erca from "../../assets/erca.jpg";
import hemed from "../../assets/hemed.jpg";
import littleMivrashot from "../../assets/littleMivrashot.jpg";
import mivreshet from "../../assets/mivreshet.jpg";
import ucaf from "../../assets/ucaf.jpg";
import ucafPillow from "../../assets/ucafPillow.jpg";

const BuyAquipment: FC = () => {
  const { t } = useTranslation();
  const aquipment: IItem[] = [
    { name: "shoes", image: shoes, id: "1", price: 45 },
    { name: "casda", image: casda, id: "2", price: 60 },
    { name: "erca", image: erca, id: "3", price: 90 },
    { name: "hemed", image: hemed, id: "4", price: 40 },
    { name: "liiteMivreshot", image: littleMivrashot, id: "5", price: 20 },
    { name: "mivreshet", image: mivreshet, id: "6", price: 10 },
    { name: "ucaf", image: ucaf, id: "7", price: 150 },
    { name: "ucafPillow", image: ucafPillow, id: "8", price: 120 },
  ];
  const [value, setValue] = useState<string>("");
  const [updatedAquipment, setUpdatedAquipment] = useState<IItem[]>([]);

  useEffect(() => {
    setUpdatedAquipment(
      aquipment.filter((item) => {
        if (item.name.toUpperCase().includes(value.toUpperCase())) return item;
      })
    );
  }, [value]);

  const handlerValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="" style={{ height: "800px" }}>
      <div
        className="card p-3 border-light shadow mt-4 infoCard"
        style={{ height: "800px" }}
      >
        <div className="inputDesign">
          <h1>come and order the best horse aquipment in low prices</h1>
          <div className="form__group field">
            <input
              type="input"
              className="form__field mb-0"
              placeholder="Name"
              name="name2"
              id="name2"
              onChange={(e) => handlerValue(e)}
              required
            />
            <label htmlFor="name2" className="form__label">
              Name
            </label>
          </div>
        </div>
        <div className="gridToAquipment">
          {updatedAquipment.map((item) => {
            return <AquipmentCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BuyAquipment;
