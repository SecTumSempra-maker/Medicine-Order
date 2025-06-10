import classes from "./UploadBox.module.css";
import { useState } from "react";

function Upload() {
  const [changedText, setChangedText] = useState("");
  const [changedisplay, setChangedDisplay] = useState("");
  function handleTextChange(event) {
    setChangedText(event.target.value);
  }

  function handleDisplay(event) {
    event.preventDefault();
    setChangedDisplay(changedText);
  }
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <p>
          <label htmlFor="textbody">Medicine Prescription</label>
          <textarea
            id="textbody"
            required
            rows={1}
            onChange={handleTextChange}
          />
        </p>

        <p>{changedisplay}</p>

        <button onClick={handleDisplay}>Upload</button>
      </form>
    </div>
  );
}

export default Upload;
