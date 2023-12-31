import Trash from "../assets/trash-icon.svg";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note) => {
    return (
      <div className="sidebar__notes" key={note.id}>
        <div
          className={`title ${
            note.id === props.currentNote.id ? "selected-note" : ""
          }`}
          onClick={() => props.setCurrentNoteId(note.id)}
        >
          <h4 className="text-snippet">{note.body}</h4>
          <button
            className="delete-btn"
            onClick={() => props.deleteNote(note.id)}
          >
            <img src={Trash} className="gg-trash trash-icon"/>
          </button>
        </div>
      </div>
    );
  });
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
