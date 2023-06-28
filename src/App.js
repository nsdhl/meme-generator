import React from "react";
import "./App.css";
import TextField from "@mui/material/TextField";


const App = () => {

  
  return (
    <div>
      <div className="navbar">
        
        <span className="text"> Meme-Generator</span>
      </div>

      <br />
      <div className="meme-form">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />{" "}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>

      <div className="meme-button" >
      Get a random meme now.
      </div>
    </div>
  );
};

export default App;
