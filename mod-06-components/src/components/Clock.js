import React from "react";
import Greeter from "./Greeter";
import withErrorBoundary from "./withErrorBoundary";

function Clock({ interval }) {
  const [time, setTime] = React.useState(new Date());
  const timeRef = React.useRef(time);
  timeRef.current = time;

  React.useEffect(() => {
    const handle = setInterval(() => {
      // throw new Error();
      console.log(timeRef.current);
      setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

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
