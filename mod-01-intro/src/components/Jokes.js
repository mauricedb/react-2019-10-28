import React from "react";

function Jokes() {
  const [jokes, setJokes] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/jon-skeet")
      .then(rsp => rsp.json())
      .then(jokes => setJokes(jokes));
  }, []);

  return (
    <ul>
      {jokes.map((joke, index) => (
        <li key={joke.id}>{joke.joke}</li>
      ))}
    </ul>
  );
}

export default Jokes;
