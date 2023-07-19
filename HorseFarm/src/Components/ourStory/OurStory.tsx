import { FC } from "react";
import { useTranslation } from "react-i18next";
import farmImage1 from "../../assets/farmImage1.jpg";

const OurStory: FC = () => {
  const { t } = useTranslation();

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
