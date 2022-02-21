import React, { useState } from "react";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setAlert(null)
     }, 1500);
  }
  const togmode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(22, 22, 51)'
      showAlert("Dark mode has been enabled", "success")
      document.title='TextUtils-Dark mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success")
      document.title='TextUtils-Light mode'
    }
  }
  return (
<>
      {/* <Router> */}
          <Navbar title="TextUtilBlog" about="About" mode={mode} togglemode={togmode}  />
          <Alert alert={alert}/>
          {/* <Routes>
              <Route path='/about' element={<About/>} />
              <Route path='/' element={<Textform  showAlert={showAlert}  head="Enter the text to Analyze below" mode={mode}/>} />
          </Routes>
          </Router> */}
          <Textform  showAlert={showAlert}  head="Enter the text to Analyze below" mode={mode}/> 
  
    </>

  );
}

export default App;
