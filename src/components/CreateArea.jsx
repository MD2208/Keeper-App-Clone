import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
