import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteTitle("");
      setNoteText("");
    }
  };

  return (
    <div className="group">
      <p className="title-group">Add a new note</p>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={handleChangeTitle}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          rows="3"
          onChange={handleChangeText}
        ></textarea>
        <div className="note-footer">
          <button
            className="btn btn-primary w-100 mx-auto"
            onClick={handleSaveClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
