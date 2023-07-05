import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const InfoFromClient: FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number | string>(1);
  const [message, setMessage] = useState<string>("");

  const handleUser = (e: any) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="info">
      <form method="POST">
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder={t("yourName")}
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="tel"
            placeholder={t("phone")}
            name="phone"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder={t("message")}
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            onSubmit={handleUser}
          >
            {t("SendMessage")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoFromClient;
