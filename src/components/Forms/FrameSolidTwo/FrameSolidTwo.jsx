import React from "react";
import "./FrameSolidTwo.scss";
import FormTwoSvg from "../../../assets/Frame2245.svg";


export default function FormTwo ({ className = "", alt = "about me frame" }) {
 return <img src={FormTwoSvg} alt={alt} className={`form-two${className ? ` ${className}` : ""}`} />;
}
