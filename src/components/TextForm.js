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
    document.getSelection().removeAllRanges(); //to remove the text selection after copying
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
        
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? '#080819' : 'white', color : props.mode === 'dark' ? 'white' : '#070e22' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-2 my-1" onClick = {handleUpClick}>Convert to Upper case</button>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-2 my-1" onClick = {handleLoClick}>Convert to Lower case</button>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-2 my-1" onClick = {handleCopy}>Copy text</button>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-2 my-1" onClick = {handleExtraSpace}>Remove extra space </button>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-2 my-1" onClick = {handleReverse}>Reverse text</button>
        <button disabled = {text.length === 0} className = "btn btn-danger mx-2 my-1" onClick = {handleClear}>Clear text</button>
        


        
    </div>
    
    <div className="conatiner my-3" style = {{color : props.mode === 'dark' ? 'white' : '#070e22'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters.</p>
    <p>It will take {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read the text provided.</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Nothing to preview yet!"}</p>
    </div>
    </>
  )
}