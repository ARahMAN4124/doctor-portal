import React from "react";
import MainHeader from "../../CommonComponents/MainHeader/MainHeader";
import Menubar from "../../CommonComponents/Menubar/Menubar";
import HeaderCard from "./HeaderCard/HeaderCard";
import "./Header.css";

const Header = () => {
  return (
    <div className="home">
      <Menubar></Menubar>
      <MainHeader></MainHeader>
      <HeaderCard></HeaderCard>
    </div>
  );
};

export default Header;
