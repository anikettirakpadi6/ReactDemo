import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleDownClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const handleSpeakClick = () => {
    // console.log("uppercase was clicked");
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
    props.showAlert("converted to speech", "success");
  };

  const handleClearClick = () => {
    // console.log("uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("text cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpeakClick}>
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Read in {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter text"}</p>
      </div>
    </>
  );
}
