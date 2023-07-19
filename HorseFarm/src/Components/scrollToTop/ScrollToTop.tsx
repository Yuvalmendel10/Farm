import { FC, useEffect, useState } from "react";
import scrollToTopImage from "../../assets/scrollToTop.png";

const scrollToTop: FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="top-to-btm">
        {" "}
        {showTopBtn ? (
          <button onClick={goToTop}>
            <img src={scrollToTopImage} className="icon-position icon-style" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default scrollToTop;
