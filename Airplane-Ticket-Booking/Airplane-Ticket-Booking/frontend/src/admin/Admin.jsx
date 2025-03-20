// Admin.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HomepageCards from "./Components/HomepageCards";
import { authContext } from "../context/authContext";

const Admin = () => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const cardData = [
    {
      title: "Add new airline",
      description: "Add new airline to the database",
      to: "/admin/add-airline",
    },
    {
      title: "Add new flight",
      description: "Add new flight to the database",
      to: "/admin/add-flight",
    },
    {
      title: "Verify ticket",
      description: "Verify ticket and update status",
      to: "/admin/verify-ticket",
    },
  ];

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="mt-10 flex flex-wrap gap-5">
        {cardData.map((card, key) => {
          return (
            <div key={key}>
              <HomepageCards
                title={card.title}
                description={card.description}
                to={card.to}
              />
            </div>
          );
        })}
      </div>
      {/* Logout button */}
      <div className="mt-5">
        <button
          className="bg-red-300 text-black px-8 py-3 rounded-xl hover:bg-red-400 transition duration-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Admin;
