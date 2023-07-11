import { FC, useEffect, useState } from "react";
import IFarmInfo from "../../interfaces/IFarmInfo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import farmImage1 from "../../assets/farmImage1.jpg";

const OurStory: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const divStyle = {
    width: "100%",
    height: "600px",

    backgroundImage: `url(${farmImage1})`,
    backgroundSize: "cover",
  };

  return (
    <div style={divStyle} className="imageFullScreen ">
      <h1> {t("ourstory")}</h1>
      <div className="">description to our story</div>
    </div>
  );
};

export default OurStory;
