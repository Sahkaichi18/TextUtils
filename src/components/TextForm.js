import React, {useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState('');

    //text = new text //wrong way to change the state.
  //setText("new text"); //Correct way to change the state

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked to : " +" "+ text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
    // console.log("Lowercase was clicked to : "+" "+ text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

    const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleReverse = () =>{
    let newText = text.split("").reverse().join("");
    setText(newText)
  }

  const handleClear = () =>{
    let newText = ("");
    setText(newText)
  }

  const handleOnChange =(event)=>{
    // console.log("onChange");
    setText(event.target.value)
  }

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className = "btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Upper case</button>
        <button className = "btn btn-primary mx-2" onClick = {handleLoClick}>Convert to Lower case</button>
        <button className = "btn btn-primary mx-2" onClick = {handleCopy}>Copy text</button>
        <button className = "btn btn-primary mx-2" onClick = {handleExtraSpace}>Remove extra space </button>
        <button className = "btn btn-primary mx-2" onClick = {handleReverse}>Reverse text</button>
        <button className = "btn btn-danger mx-2" onClick = {handleClear}>Clear text</button>
        


        
    </div>
    
    <div className="conatiner my-3">
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters.</p>
    <p>It will take {0.008 * text.split(" ").length} minutes to read the text provided.</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}