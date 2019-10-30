import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeter from "./components/Greeter";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greeter
          prefix="The prefix"
          person={{ firstName: "Maurice", lastName: "de Beijer" }}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

enum AnimalType {
  Cat = "Cat",
  Dog = "Dog"
}

function printAnimal(animal: AnimalType) {
  console.log(animal);
}

printAnimal(AnimalType.Cat);
printAnimal(AnimalType.Dog);
// printAnimal("Cat");

type BetterAnimalType = "Cat" | "Dog";

function printBetterAnimal(animal: BetterAnimalType) {
  console.log(animal);
}

printBetterAnimal("Cat");
// printBetterAnimal("Snake")

export default App;
