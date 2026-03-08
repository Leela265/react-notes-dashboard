import { useContext, useMemo } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesCount() {
  const { notes } = useContext(NotesContext);

  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);

  return <h3>Total Notes: {totalNotes}</h3>;
}

export default NotesCount;