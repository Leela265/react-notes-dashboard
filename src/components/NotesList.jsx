import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesList() {
  const { notes, selectedNote, setSelectedNote } = useContext(NotesContext);

  return (
    <ul>
      {notes.map((note, index) => (
        <li
          key={index}
          onClick={() => setSelectedNote(index)}
          style={{
            cursor: "pointer",
            backgroundColor: selectedNote === index ? "yellow" : "white",
            padding: "5px",
            margin: "5px 0",
          }}
        >
          {note}
        </li>
      ))}
    </ul>
  );
}

export default NotesList;