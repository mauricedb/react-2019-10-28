class Calculator {
  // private message: string;
  // constructor(message: string) {
  //   this.message = message;
  // }
  constructor(private readonly message: string) {}

  add(x: number, y: number) {
    // this.message = ''

    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
}
const x = document.getElementById("x") as HTMLInputElement;
const y = document.getElementById("y") as HTMLInputElement;
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator("");

add.addEventListener("click", () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener("click", () => {
  result.textContent = calculator.subtract(x.value, y.value).toString();
});

var person = {
  firstName: "Maurice"
};

// person.lastName = "de Beijer";

class Cat {
  constructor(public catName: string) {}

  sleep() {}
}

const zorro = new Cat("Zorro");

function eat(cat: Cat) {
  console.log(cat.catName + " is eating");
  cat.sleep();

  if (cat instanceof Cat) {
  }
}

eat(zorro);

eat({
  catName: "Garfield",
  sleep() {}
});
