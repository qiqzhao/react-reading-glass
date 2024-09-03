import ReactRadingGlass from "react-reading-glass";
import "react-reading-glass/dist/style.css";

import Img from "./assets/1.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <ReactRadingGlass Img={Img} />
    </div>
  );
}

export default App;
