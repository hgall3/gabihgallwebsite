import React from "react";
import "./FrameSolidOne.scss";
import FormOneSvg from "../../../assets/Frame1212.svg";


export default function FormOne ({ className = "", alt = "about me frame" }) {
 return <img src={FormOneSvg} alt={alt} className={`form-one${className ? ` ${className}` : ""}`} />;
}
