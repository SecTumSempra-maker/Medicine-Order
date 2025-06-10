import classes from "./UploadBox.module.css";

function Upload() {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <p>
          <label htmlFor="textbody">Medicine Prescription</label>
          <textarea id="textbody" required rows={1} />
        </p>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
