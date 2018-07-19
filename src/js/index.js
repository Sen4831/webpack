import '../scss/main.scss'

let a = 500
let b = 600

function sum() {
  let result = 0;
  for (const arg of arguments) {
    result += arg;
  }
  return result;
}

let res = sum(a, b)
console.log(res);

