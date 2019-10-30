import React from "react";
import withErrorBoundary from "./withErrorBoundary";
import { timeContext } from "./TimeContext";

function Clock() {
  const { time } = React.useContext(timeContext);

  return (
    <div>
      <hr />
      <div>The time is: {time.toLocaleTimeString()}</div>
      <hr />
    </div>
  );
}

export default withErrorBoundary(Clock);
