import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  function createNewNote() {
    const newNote = {};
  }

  return (
    <main>
      {notes.length > 0 ? (
        <div>
          <Sidebar />
          <Editor />
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
