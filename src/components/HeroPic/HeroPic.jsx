import React from "react";
import "./HeroPic.scss";
import PinkFrame from "../../assets/pinkframe.svg"; 

export default function HeroPic({ className = "", alt = "Hero image" }) {
  return <img src={PinkFrame} alt={alt} className={`hero-pic ${className}`} />;
}
