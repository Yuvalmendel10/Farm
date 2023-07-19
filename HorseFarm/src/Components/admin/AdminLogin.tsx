import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AdminLogin: FC = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    username === "moshe" && password === "froim"
      ? navigate("/admin")
      : alert("errorrrr connecting - wrong details");
  };

  return (
    <div className="">
      <h4>add your personal details</h4>
      <form onSubmit={handleSubmit} className="inputDesign">
        <div className="form__group field ">
          <input
            type="username"
            className="form__field"
            ref={inputRef}
            placeholder="username"
            name="username"
            id="username"
            onChange={updateUsername}
            required
          />
          <label htmlFor="username" className="form__label">
            username
          </label>
        </div>

        <div className="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="password"
            name="password"
            id="password"
            onChange={updatePassword}
            required
          />
          <label htmlFor="password" className="form__label">
            password
          </label>
        </div>

        <div className="form-group mt-2 mb-2">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-dark">
              connect
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
