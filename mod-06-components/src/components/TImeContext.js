import React from "react";

export const timeContext = React.createContext();

export function TimeProvider({ children }) {
  const interval = 1000;
  const [time, setTime] = React.useState(new Date());
  const timeRef = React.useRef(time);
  timeRef.current = time;

  React.useEffect(() => {
    const handle = setInterval(() => {
      // throw new Error();
      console.log(timeRef.current);
      setTime(new Date());
      // setTime(new Date());
      // setTime(new Date());
      // setTime(new Date());
      // setTime(new Date());
      // setTime(new Date());
      // setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

  return (
    <timeContext.Provider value={{ time, setTime }}>
      {children}
    </timeContext.Provider>
  );
}
