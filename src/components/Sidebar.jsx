export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => {
    return (
      <div key={note.id}>
        <div className={`title`}>
          <h4>{note.body}</h4>
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
