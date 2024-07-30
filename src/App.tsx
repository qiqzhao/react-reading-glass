import React from "react";
import "./App.css";
import ReadingGlass from "./components/reading-glass";
import Img from './assets/1.jpg'

function App() {
  return (
    <div className="App">
      <ReadingGlass Img={Img} />
    </div>
  );
}

export default App;
