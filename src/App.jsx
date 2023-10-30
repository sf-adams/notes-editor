import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote(text) {
    const newNote = {
      id: nanoid(),
      body: `${text}`,
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
    setCurrentNoteId(newNote.id);
  }

  function updateNote() {}

  function findCurrentNote() {
    console.log("This runs")
    return notes.find((note) => {
      return note.id === currentNoteId

    });
  }

  console.log(notes)

  return (
    <main>
      {notes.length > 0 ? (
        <div>
          <button onClick={createNewNote}>Create one now</button>
          {/* <Sidebar findCurrentNote={findCurrentNote} /> */}
          <Editor currentNote={findCurrentNote()}/>
        </div>
      ) : (
        <div>
          <p>There are currently no notes in the editor</p>
          <button onClick={createNewNote}>Create one now</button>
        </div>
      )}
    </main>
  );
}

export default App;