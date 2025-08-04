import React, { useState } from 'react'

export default function About(props) {
    
//  const[myStyle, setMyStyle] = useState({
//     color : 'black',
//     backgroundColor : 'white'
// });

let myStyle = {
    color : props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor : props.mode === 'dark' ? '#042743' : 'white'
}

   

  return (
    <div className = "container">
        <h1 className = "my-3" style = {{ color : props.mode === 'dark' ? 'white' : '#042743'}} >About us</h1>
      <div className="accordion" id="accordionExample">
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Analyze your text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or removing extra spaces, TextUtils is here to help you with all your text manipulation needs. It’s free to use and works in your browser, so you don’t need to install anything on your device.
                </div>
                </div>
            </div>
            <div className="accordion-item"style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limits.
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   This word counter software is powered by TextUtils. This word counter software is free and works in your browser. You can use it to count characters, words, paragraphs, and pages. It also provides you with a word counter that can help you write better content.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
