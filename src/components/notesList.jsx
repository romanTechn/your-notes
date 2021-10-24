import React, { useState, useEffect } from "react";
import Note from "./note";
import AddNote from "./addNote";
import { nanoid } from "nanoid";

const NotesList = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "1",
      text: "Первая заметка",
      date: "15.10.2021",
    },
    {
      id: nanoid(),
      title: "2",
      text: "Вторая заметка",
      date: "16.10.2021",
    },
    {
      id: nanoid(),
      title: "3",
      text: "Третья заметка",
      date: "17.10.2021",
    },
    {
      id: nanoid(),
      title: "4",
      text: "Четвертая заметка",
      date: "18.10.2021",
    },
    {
      id: nanoid(),
      title: "5",
      text: "Пятая заметка",
      date: "19.10.2021",
    },
  ]);

  const handleAddNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("your-notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [setNotes]);

  useEffect(() => {
    localStorage.setItem("your-notes-data", JSON.stringify(notes));
  }, [notes]);
  return (
    <>
      <AddNote handleAddNote={handleAddNote} />
      <div className="group">
        <p className="title-group">Your notes</p>
        <div className="notes-list">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NotesList;
