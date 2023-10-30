import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import React from "react";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function Editor({ currentNote }) {
  const [selectedTab, setSelectedTab] = React.useState("write")

  // const converter = new Showdown.Converter({
  //     tables: true,
  //     simplifiedAutoLink: true,
  //     strikethrough: true,
  //     tasklists: true,
  // })  

  return (
      <section className="pane editor">
        {currentNote}
          {/* <ReactMde
              value={currentNote.body}
              onChange={updateNote}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) =>
                  Promise.resolve(converter.makeHtml(markdown))
              }
              minEditorHeight={80}
              heightUnits="vh"
          /> */}
      </section>
  )
}
