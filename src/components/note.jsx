import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span className="fw-bold">{title}</span>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
      <Link to="/note:id?">
        <button className="btn btn-outline-dark w-100 mx-auto mt-1">
          Open
        </button>
      </Link>
    </div>
  );
};

export default Note;
