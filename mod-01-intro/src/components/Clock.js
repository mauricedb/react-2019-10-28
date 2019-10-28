import React from "react";

function Clock() {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const handle = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(handle);
  }, []);

  return <div>The time is: {now.toLocaleTimeString()}</div>;
}

export default Clock;
