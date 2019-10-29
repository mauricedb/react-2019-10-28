import { Observable, from, interval, fromEvent } from "rxjs";
import { filter, map, scan, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// const o$ = new Obse  rvable(function(sub) {
//   sub.next(1);
//   sub.next(2);
//   sub.next(3);

//   setInterval(() => sub.next(4), 1000);
//   // sub.error(new Error());
//   setTimeout(() => sub.complete(), 5000);
// });

// const subscription = o$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log(err),
//   complete: () => console.log("Closed")
// });
// // const subscription = o$.subscribe(
// //   value => console.log(value),
// //   err => console.log(err),
// //   () => console.log("Closed")
// // );

// // setTimeout(() => subscription.unsubscribe(), 5000);

const mapNumbers = document.getElementById("mapNumbers");
const startTimer = document.getElementById("startTimer");
const loadJokes = document.getElementById("loadJokes");
const result = document.getElementById("result");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jokesUrl =
  "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

// mapNumbers.addEventListener("click", () => {

fromEvent(mapNumbers, "click")
  .pipe(
    switchMap(() =>
      from(numbers).pipe(
        filter(n => n % 2 === 0),
        map(n => ({ n })),
        scan((p, c) => p.concat(c), [])
      )
    )
  )
  .subscribe(values => {
    console.log(values);
    result.textContent = JSON.stringify(values);
  });

// const values = numbers
//   .filter(n => n % 2 === 0)
//   .map(n => ({ n }));
// result.textContent = JSON.stringify(values);
// });

// startTimer.addEventListener("click", () => {
fromEvent(startTimer, "click")
  .pipe(
    switchMap(e =>
      interval(1000).pipe(
        filter(n => n % 2 === 0),
        map(n => ({ n })),
        scan((p, c) => p.concat(c), [])
      )
    )
  )
  .subscribe(values => {
    console.log(values);
    result.textContent = JSON.stringify(values);
  });

// const values = [];
// let n = 0;
// setInterval(() => {
//   n += 1;
//   if (n % 2 === 0) {
//     values.push({ n });
//     result.textContent = JSON.stringify(values);
//   }
// }, 1000);
// });

fromEvent(loadJokes, "click")
  .pipe(switchMap(() => ajax.getJSON(jokesUrl)))

  .subscribe(data => {
    const jokes = data.value;
    result.textContent = JSON.stringify(jokes);
  });

// fetch(jokesUrl)
//     .then(rsp => rsp.json())
//     .then(data => data.value)
//     .then(jokes => {
//       result.textContent = JSON.stringify(jokes);
//     });
// });
