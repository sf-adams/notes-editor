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
        </div>
      </div>
    );
  });
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.createNewNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
