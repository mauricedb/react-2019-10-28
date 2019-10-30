import React from "react";
import Greeter from "./Greeter";
import withErrorBoundary from "./withErrorBoundary";
import { timeContext } from "./TImeContext";

function Clock({ interval }) {
  const { time } = React.useContext(timeContext);
  const person = React.useMemo(() => ({ firstName: "Timer" }), []);

  return (
    <div>
      <hr />
      <div>The time is: {time.toLocaleTimeString()}</div>
      <Greeter person={person}></Greeter>
      <Greeter person={{ firstName: "Jack" }}></Greeter>
      <Greeter person={{ firstName: "Maurice" }}></Greeter>
      <hr />
    </div>
  );
}

Clock.defaultProps = {
  interval: 1000
};

export default withErrorBoundary(Clock);
