import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  phone: number | string;
  isChecked: boolean;
};

const InfoFromClient: FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const user: User = {
    name: "",
    email: "",
    phone: "0",
    isChecked: false,
  };

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const updatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const updateConnection = () => {
    setIsChecked(!user.isChecked);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.isChecked = isChecked;
  };

  return (
    <div className="">
      <div className="card p-3 border-light shadow infoCard">
        <h4>add your personal details</h4>
        <form onSubmit={handleSubmit} className="inputDesign">
          <div className="form__group field ">
            <input
              type="name"
              className="form__field"
              placeholder={t("name")}
              name="name"
              id="name"
              onChange={updateName}
              required
            />
            <label htmlFor="name" className="form__label">
              {t("name")}
            </label>
          </div>

          <div className="form__group field">
            <input
              type="email"
              className="form__field"
              placeholder={t("email")}
              name="name"
              id="email"
              onChange={updateEmail}
              required
            />
            <label htmlFor="email" className="form__label">
              {t("email")}
            </label>
          </div>

          <div className="form__group field mt-2 mb-2 ">
            <input
              type="phone"
              className="form__field"
              placeholder={t("phoneNumber")}
              name="name"
              id="phone"
              onChange={updatePhone}
              required
            />
            <label htmlFor="phone" className="form__label">
              {t("phoneNumber")}
            </label>
          </div>

          <div className="form-group mt-2 mb-2">
            <div className="form-check">
              <input
                type="checkbox"
                id="gridCheck1"
                className="form-check-input"
                onChange={updateConnection}
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                {t("gettingInfo")}
              </label>
            </div>
          </div>
          <div className="form-group mt-2 mb-2">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-dark">
                {t("send")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoFromClient;
