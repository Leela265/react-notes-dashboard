import { useState, useRef, useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteInput() {
  const [note, setNote] = useState("");
  const { addNote } = useContext(NotesContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (note.trim() === "") return;

    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={note}
        placeholder="Enter note..."
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
}

export default NoteInput;