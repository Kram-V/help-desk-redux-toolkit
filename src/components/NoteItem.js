import React from "react";
import "./css/NoteItem.css";

const NoteItem = ({ note }) => {
  return (
    <div className="note-text">
      <p> {note.text}</p>
      <p>( {new Date(note.createdAt).toLocaleString("en-PH")} )</p>
    </div>
  );
};

export default NoteItem;
