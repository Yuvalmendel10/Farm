import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import horseLogo from "../../assets/horseLogo.jpg";
import Weather from "../weather/Weather";

const NavigationBar: FC = () => {
  const { t } = useTranslation();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <div className="">
      <nav
        style={{
          backgroundColor: "rgba(251, 251, 253, .8)",
          backdropFilter: "saturate(180%) blur(20px)",
        }}
        className="navbar fixed-top navbar-expand-lg navbar-light bg- px-3"
      >
        <a className="navbar-brand" href="/home">
          <img src={horseLogo} width="80" height="60" alt="" />
        </a>
        <a className="navbar-brand fw-bold fs-3" href="/">
          {t("BialikFarm")}
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link fw-bold fs-5" href="/home">
                {t("Home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold fs-5" href="/information">
                {t("Information")}
              </a>
            </li>
            <li className="nav-item">
              {isAdminLoggedIn ? (
                <div>
                  <a className="nav-link fw-bold fs-5" href="/admin">
                    {t("admin connect")}
                  </a>
                </div>
              ) : (
                <div>
                  <a className="nav-link fw-bold fs-5" href="/adminLogin">
                    {t("adminConnect")}
                  </a>
                </div>
              )}
            </li>
          </ul>
          <a
            className="link-light m-2"
            href="https://www.facebook.com/people/%25D7%259E%25D7%25A8%25D7%259B%25D7%2596-%25D7%25A8%25D7%259B%25D7%2599%25D7%2591%25D7%2594-%25D7%259B%25D7%25A4%25D7%25A8-%25D7%2591%25D7%2599%25D7%2590%25D7%259C%25D7%2599%25D7%25A7/100057364972130/?locale=he_IL"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill=""
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>

          <a
            className="link-light m-2"
            href="https://www.waze.com/he/live-map/directions?to=ll.32.818244%2C35.091083"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill=""
              viewBox="0 0 512 512"
            >
              <path d="M502.17 201.67C516.69 287.53 471.23 369.59 389 409.8c13 34.1-12.4 70.2-48.32 70.2a51.68 51.68 0 0 1-51.57-49c-6.44.19-64.2 0-76.33-.64A51.69 51.69 0 0 1 159 479.92c-33.86-1.36-57.95-34.84-47-67.92-37.21-13.11-72.54-34.87-99.62-70.8-13-17.28-.48-41.8 20.84-41.8 46.31 0 32.22-54.17 43.15-110.26C94.8 95.2 193.12 32 288.09 32c102.48 0 197.15 70.67 214.08 169.67zM373.51 388.28c42-19.18 81.33-56.71 96.29-102.14 40.48-123.09-64.15-228-181.71-228-83.45 0-170.32 55.42-186.07 136-9.53 48.91 5 131.35-68.75 131.35C58.21 358.6 91.6 378.11 127 389.54c24.66-21.8 63.87-15.47 79.83 14.34 14.22 1 79.19 1.18 87.9.82a51.69 51.69 0 0 1 78.78-16.42zM205.12 187.13c0-34.74 50.84-34.75 50.84 0s-50.84 34.74-50.84 0zm116.57 0c0-34.74 50.86-34.75 50.86 0s-50.86 34.75-50.86 0zm-122.61 70.69c-3.44-16.94 22.18-22.18 25.62-5.21l.06.28c4.14 21.42 29.85 44 64.12 43.07 35.68-.94 59.25-22.21 64.11-42.77 4.46-16.05 28.6-10.36 25.47 6-5.23 22.18-31.21 62-91.46 62.9-42.55 0-80.88-27.84-87.9-64.25z" />
            </svg>
          </a>
          <a
            className="link-light m-2"
            href="https://www.instagram.com/kfar_bialik_riding_center/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill=""
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a
            className="link-light m-2"
            href="https://www.tiktok.com/discover/%D7%97%D7%95%D7%95%D7%AA-%D7%A1%D7%95%D7%A1%D7%99%D7%9D-%D7%9B%D7%A4%D7%A8-%D7%91%D7%99%D7%90%D7%9C%D7%99%D7%A7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill=""
              className="bi bi-tiktok"
              viewBox="0 0 16 16"
            >
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
            </svg>
          </a>
          <Weather />
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
