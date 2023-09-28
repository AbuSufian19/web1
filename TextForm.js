import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
       props.showalert("Converted to UPPER case!","success");
    }
    
      const handleLoClick =()=>{
         // console.log("Uppercase was clicked" + text);
          let newText = text.toLowerCase();
          setText(newText);
          props.showalert("Converted to lower case!","success");
      }
      const handleClearClick =()=>{
        // console.log("Uppercase was clicked" + text);
         let newText ='';
         setText(newText);
         props.showalert("Clear Text!","success");

     }
     const extractEmails = () => {
      return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
      
    }

      const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copy Text!","success");
      }

      const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Split!","success");
      }

  
    const handleOnChange =(event)=>{
        //console.log(" on change");
        setText(event.target.value);
    }
   
    const [text, setText] = useState('Enter Text Here');


 const getWordCount = () => {
  // Split the text by whitespace and filter out empty strings
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
};

   

   

  return (
    <>
    <div className="container" style= {{color : props.mode ==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor : props.mode ==='dark'?'#484042':'white' ,color : props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UPPER Case</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
    <button className="btn btn-primary my-3 mx-2" onClick={extractEmails}>Extract Emails</button>
    <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary my-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>

</div>
<div className="container my-3"  style= {{color : props.mode ==='dark'?'white':'black'}}>
  <h2>Your Text Sumarry</h2>
  <p>{text.split(".").length} sentences</p>
  <p>{getWordCount()} words and {text.length} characters</p>

  
   

  <p>{0.008 * text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>

   
  )
}
