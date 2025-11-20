import React from "react";
import "./CRUDButtons.scss";
import EditIcon from "../../../assets/edit.svg";
import CreateIcon from "../../../assets/create.svg";
import EraseIcon from "../../../assets/erase.svg";


export default function CRUDButtons({ onEdit, onCreate, onDelete }) {
  return (
    <div className="crud-buttons">
      <button className="crud-btn" onClick={onEdit} aria-label="Edit project">
        <img src={EditIcon} alt="Edit" />
      </button>

      <button className="crud-btn" onClick={onCreate} aria-label="Create project">
        <img src={CreateIcon} alt="Create" />
      </button>

      <button className="crud-btn" onClick={onDelete} aria-label="Delete project">
        <img src={EraseIcon} alt="Delete" />
      </button>
    </div>
  );
}
