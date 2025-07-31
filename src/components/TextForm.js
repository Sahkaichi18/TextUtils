import React, {useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState('');

    //text = new text //wrong way to change the state.
  //setText("new text"); //Correct way to change the state

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked to : " +" "+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Your text has been converted to uppercase!" , "success : ");
  }

  const handleLoClick = () =>{
    // console.log("Lowercase was clicked to : "+" "+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Your text has been converted to lowercase!" , "success : ");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Your text has been copied!" , "success : ");

  }

    const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Your text has no extra space!" , "success : ");

  }

  const handleReverse = () =>{
    let newText = text.split("").reverse().join("");
    setText(newText)
    props.showAlert("Your text has been reversed!" , "success : ");

  }

  const handleClear = () =>{
    let newText = ("");
    setText(newText)
    props.showAlert("Your text has been cleared!" , "success : ");
  }

  const handleOnChange =(event)=>{
    // console.log("onChange");
    setText(event.target.value)
  }

  return (
    <>
    <div className = "container" style = {{color : props.mode === 'dark' ? 'white' : '#070e22'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : '#070e22' }} id="myBox" rows="8"></textarea>
        </div>
        <button className = "btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Upper case</button>
        <button className = "btn btn-primary mx-2" onClick = {handleLoClick}>Convert to Lower case</button>
        <button className = "btn btn-primary mx-2" onClick = {handleCopy}>Copy text</button>
        <button className = "btn btn-primary mx-2" onClick = {handleExtraSpace}>Remove extra space </button>
        <button className = "btn btn-primary mx-2" onClick = {handleReverse}>Reverse text</button>
        <button className = "btn btn-danger mx-2" onClick = {handleClear}>Clear text</button>
        


        
    </div>
    
    <div className="conatiner my-3" style = {{color : props.mode === 'dark' ? 'white' : '#070e22'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters.</p>
    <p>It will take {0.008 * text.split(" ").length} minutes to read the text provided.</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter your text in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}