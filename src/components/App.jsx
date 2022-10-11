import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((item, index) => id !== index));
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
