import React from "react";

import Clock from "./components/Clock";
import Greeter from "./components/Greeter";
import PersonEditor from "./components/PersonEditor";
import Counter from "./components/Counter";
import withErrorBoundary from "./components/withErrorBoundary";
import { TimeProvider } from "./components/TImeContext";

function App() {
  return (
    <TimeProvider>
      <div>
        <Greeter person={{ firstName: "Maurice" }} />
        <Clock />
        <PersonEditor />
        <Counter />
      </div>
    </TimeProvider>
  );
}

export default withErrorBoundary(App);
