import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Please Enter');
  const handleClick = () => {
    console.log('handleClick' + text);
    let newTxt = text.toUpperCase();
    setText(newTxt);
    console.log(newTxt);
  }
  const handleChange = (event) => {
    console.log('handleChange');
    setText(event.target.value);
  }
  return (
    <div>
        <div className="mb-3">
            <label forhtml="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" value = {text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary" onClick={handleClick} >Convert to Uppercase</button>
        </div>
    </div>
  )
}
