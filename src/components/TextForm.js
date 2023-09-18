import React, {useState} from 'react'
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextForm(props) {
  const [text, setText] = useState('Please Enter');
  const { speak } = useSpeechSynthesis();

  const handleClick = () => {
    console.log('handleClick' + text);
    let newTxt = text.toUpperCase();
    setText(newTxt);
    console.log(newTxt);
    props.showAlert('my toUpperCase message', 'success');
  }
  const handleSpeachClick = () => {
    speak({ text: text })
  }
  const handleChange = (event) => {
    console.log('handleChange');
    setText(event.target.value);
  }
  return (
    <>
    <div>
        <div className="mb-3">
            <label forhtml="exampleFormControlTextarea1" className="form-label mx-2">{props.heading}</label>
            <textarea className="form-control mx-2" style = {{ backgroundColor: props.newModes.mymode === 'light' ? 'grey' : 'black' } } value = {text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary mx-2" onClick={handleClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleSpeachClick} >Speech</button>
        </div>
    </div>
    <div className="container">
      <h1> Summary</h1>
      <p>
      {text.split(' ').length} words and {text.length} characters
      </p>
      <p>Preview : </p>
      <p> {text.length > 0 ? text : 'Enter to see the preview'} </p>
    </div>    
    </>

  )
}
