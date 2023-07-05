import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import "./NavBar.css";
//import HomeIcon from "@material-ui/icons/Home";

const NavBar: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          {t("BialikFarm")}
        </a>
        <ul>
          <li className="active">
            <a href="/home">{t("Home")}</a>
          </li>
          <li className="active">
            <a href="/information">{t("Information")}</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
