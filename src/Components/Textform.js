import React,{useState} from 'react'

export default function (props) {
    const [text,setText]=useState("")
    
   const uppercase=()=>{
      // console.log("btn was clicked");
       let newtext=text.toUpperCase();
       setText(newtext)
       props.showAlert("Converted to Uppercase", "success")
     
   }
   const clear=()=>{
       //console.log("clear");
       let newone="";
       setText(newone)
       props.showAlert("All text has been cleared", "success")

   }
   const len=()=>{
        let newk=text.length;
        setText("The Length of previous text is "+newk)
        props.showAlert("Length function has been called", "success")

   }
   const rep=()=>{
     let newtwo=text.replace('kinza',"Kinza_Arshad")
     setText(newtwo)
     props.showAlert("All text has been replaced", "success")


   }
   const handlefun=(event)=>{
     //  console.log("chnage");
       setText(event.target.value)
   }
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='dark'? 'white':'black'}}> 
    <h1 className='my-3'>Forms</h1>
    <h1>{props.head}</h1>
<div className="mb-3">
  <textarea className="form-control " value={text} onChange={handlefun} style={{backgroundColor:props.mode==='dark'? 'rgb(65, 65, 105)':'white', color:props.mode==='dark'? 'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={uppercase} >Convert to Uppercase</button>
<button className='mx-2' onClick={clear}>Clear</button>
<button className='mx-2' onClick={len}>Length</button>
<button className='mx-2' onClick={rep}>Replace</button>

    </div>
     <div className="container my-4" style={{color:props.mode==='dark'? 'white':'black'}}>
       <h2>Your Text Summary :</h2>
       <p>{text.split(" ").length} words and {text.length} chracters</p>
       <p>{0.008* text.split(" ").length} Minutes to read</p>
       <h2>Preview</h2>
       <p>{text}</p>
     </div>
    </>
  )
}
