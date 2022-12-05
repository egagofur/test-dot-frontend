import React from "react";
import toggle from "../../assets/toggle.svg";

const Header = ({ category }) => {
  return (
    <div className="w-full absolute h-8 top-6 px-6 flex gap-8 items-center">
      <img src={toggle} alt="toggle" />
    </div>
  );
};

export default Header;
