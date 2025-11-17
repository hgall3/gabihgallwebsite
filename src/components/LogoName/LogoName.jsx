import React from "react";
import "../LogoName/LogoName.scss";
import GabiHgall from "../../assets/gabihgall.svg";

export default function LogoName({ className = "", alt = "gabi H gall" }) {
  return <img src={GabiHgall} alt={alt} className={`logo-name ${className}`} />;
}