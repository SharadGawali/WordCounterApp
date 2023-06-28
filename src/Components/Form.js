import React, {useState} from 'react'//Import React Hooks

export default function Form(props) {
    const ToUpperCase =() =>{
       // console.log('Convert Into ToUpperCase'+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success");
    }
    const ToLowerCase =() =>{
      // console.log('Convert Into ToUpperCase'+ text)
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted To Lowercase", "success")
   }
   const clear =() =>{
    // console.log('Convert Into ToUpperCase'+ text)
     let newText = text.slice(text.length);
     setText(newText)
     props.showAlert("Text Has Been Cleard", "success")
 }

 const copy = () => {
  var text = document.getElementById("Textarea1");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied To Clipboard", "success")
}
const RemoveExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Spaces Has Been Removed", "success")
}
    const OnChange =(event) =>{
       // console.log('OnChange')
        setText(event.target.value)
    }

    const [text, setText] = useState('');// React Hooks
  return (
    <>
    <div className='container' style={{color: props.Mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange={OnChange} style={{backgroundColor: props.Mode ==='dark'? '#13466e': 'white', color: props.Mode==='dark' ? 'white':'black'}} id="Textarea1" rows="7"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ToUpperCase}>Convert To Upper Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ToLowerCase}>Convert To Lower Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
</div>
   
    <div className="container my-3" style={{color: props.Mode==='dark'?'white':'black'}}>
    <h1>WordCounter</h1>
    <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuits Read</p>
    <h3>Preview</h3>
    <p><strong>{text.length>0?text:"~Text Preview~"}</strong></p>
    </div>
   
    </>
  )
}
