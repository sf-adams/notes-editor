import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { nanoid } from "nanoid";
import Split from "react-split";

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
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <div>
          <Split sizes={[30, 70]} direction="horizontal">
            <Sidebar
              notes={notes}
              findCurrentNote={findCurrentNote}
              createNewNote={createNewNote}
            />
            <div>Editor</div>
          </Split>
          {/* <Editor currentNote={findCurrentNote()}/> */}
        </div>
      ) : (
        <div className="no-notes">
          <p>There are currently no notes in the editor</p>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
