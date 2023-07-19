import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
    <div className="p-5 grid4">
      <div className="inputDesign">
        <h1>{t("orderNow")}</h1>
        <div className="form__group field">
          <input
            type="input"
            className="form__field mb-0"
            placeholder={t("itemName")}
            name="name2"
            id="name2"
            onChange={(e) => handlerValue(e)}
            required
          />
          <label htmlFor="name2" className="form__label">
            {t("itemName")}
          </label>
        </div>
      </div>
      <div className="gridToAquipment">
        {updatedAquipment.length !== 0 ? (
          updatedAquipment.map((item) => {
            return <AquipmentCard key={item.id} item={item} />;
          })
        ) : (
          <div className="noItems">
            <h1>no items found</h1>
          </div>
        )}
      </div>
      <div>
        <h5>{t("toMoreDetails")}</h5>
      </div>
    </div>
  );
};

export default BuyAquipment;
