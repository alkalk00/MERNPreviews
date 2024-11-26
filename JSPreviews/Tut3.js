//async funciton in js

import data from "./Books";

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("hello");

async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

const todo = getTodo();
console.log(todo);
console.log("hi");
