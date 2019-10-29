import React from "react";

import Clock from "./components/Clock";
import Greeter from "./components/Greeter";
import PersonEditor from "./components/PersonEditor";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Greeter person={{ firstName: "Maurice" }} />
      <Clock />
      <PersonEditor />
      <Counter />
    </div>
  );
}

export default App;
