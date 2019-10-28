import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Demo from "./components/Demo";
import FunctionalComponent from "./components/FunctionalDemo";
import PersonEditor from "./components/PersonEditor";
import Clock from "./components/Clock";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div>
      <Demo firstName="Maurice" lastName="de Beijer" />
      <FunctionalComponent firstName="Maurice" />
      <PersonEditor />
      <Clock />
      <Jokes />
    </div>
  );
}

export default App;
