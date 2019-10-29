// console.log(add) => 에러 x, 함수 선언식은 선언만 되어있으면 바로 알 수 있게 설계가 되어 있다.
// console.log(sub) => 에러 발생, 함수 표현식은 선언한 위치까지 왔을부터 알 수 있다.

// 함수 선언식
function add(num1, num2) {
  return num1 + num2
}
console.log(add(1, 2)) // 3

// 함수도 변수에 할당될 수 있다.
// 함수 표현식
const sub = function(num1, num2) {
  return num1 - num2
}

// Arrow Function
// ES6+
// 이름 없는 함수
let addOne = function(num) {
  return num + 1
}

addOne = (num) => {
  return num + 1
} // 많이 쓸 예정

// 중괄호 제거는 바로 반환하겠다는 뜻
addOne = (num) => num + 1

addOne = num => num + 1  // 최종 arrow function

// name 이라는 인자를 받아서 hello ${name} 을 반환하는 함수를
// 선언식, 표현식, arrow function 으로 만들어 보세요
function greeting1(name){
  return `hello ${name}`
}

let greeting2 = function(name) {
  return `hello ${name}`
}

greeting3 = name => `hello ${name}`

// object 를 반환하는 arrow function

const makeObject = (value) => {
  return {'key': value}
}

const makeObject2 = value => ({'key': value})

const noArgs = () => 'No args'  // 받는 instance 가 하나도 없으면 비어있는 소괄호를 넣어주어야 한다.


