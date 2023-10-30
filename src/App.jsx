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

  function updateNote(text) {
    // Put the most recently-modified note at the top
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

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
          <Split
            className="split"
            sizes={[30, 70]}
            gutterSize={15}
            direction="horizontal"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote}
              createNewNote={createNewNote}
            />
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          </Split>
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
