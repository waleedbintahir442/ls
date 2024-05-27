import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function Textform(props) {
  const [text, settext] = useState('');

  const handleonchange = (event) => {
    settext(event.target.value);
  };

  const handleup = () => {
    let mytext = text.toUpperCase();
    settext(mytext);
    props.showalert('Converted to uppercase!', "success");
  };

  const handled = () => {
    let mytext = text.toLowerCase();
    settext(mytext);
    props.showalert('Converted to lowercase!', "success");
  };

  const copytext = () => {
    if (text.trim() !== '') {
      navigator.clipboard.writeText(text);
      props.showalert('Copied!', "success");
    } else {
      props.showalert('Nothing to copy!', "danger");
    }

  };
  const speak = () => {
    if (text.trim() !== '') {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    } else {
      props.showalert('Nothing to speak!', "danger");
    }

  };


  const cleard = () => {
    if (text.trim() !== '') {
      settext("");
      props.showalert('Cleared!', "success");
    } else {
      props.showalert('Nothing to clear!', "danger");
    }

  };

  return (
<>
    
    <div className=" container  mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'white' }}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Enter text to analyze
      </label>
      <textarea
        className="form-control"
        style={{ backgroundColor: props.mode === 'dark' ? 'ThreeDDarkShadow' : 'white', color: props.mode === 'dark' ? 'white' : 'ThreeDDarkShadow' }}
        value={text}
        onChange={handleonchange}
        id="exampleFormControlTextarea1"
        rows="8"
      ></textarea>
      <button className="button bg-primary my-3 mx-2" onClick={handleup}>
        UPPER CASE
      </button>
      <button className="button bg-primary my-3 mx-2" onClick={handled}>
        LOWER CASE
      </button>
      <button className="button bg-primary my-3 mx-2" onClick={cleard}>
        CLEAR TEXT
      </button>
      <button className="button bg-primary my-3 mx-2" onClick={copytext}>
        COPY TEXT
      </button>
      <button className="button bg-secondary my-3 mx-2" onClick={speak}>
        Speak text
      </button>

      <h1>TEXT SUMMARY</h1>
      <p><b>
        There are {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        in the text.</b>
      </p>
      <p> <b> It takes {0.08 * text.length}  time to read the text </b></p>
      <h2>TEXT</h2>
      <p>{text.length > 0 ? text : "Enter text above"}</p>
    </div>
    </>

  );
}
