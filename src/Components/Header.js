import React from "react";
import netflix_logo from "../images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b form-black">
      <img src={netflix_logo} alt="n_logo" className="w-44" />
    </div>
  );
};

export default Header;
