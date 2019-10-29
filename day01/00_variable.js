// 한줄 주석
/*
여러줄에 걸친 주석
*/
// 값을 재할당 할 수 있는 변수를 선언하는 키워드
// 재선언 불가
// 블럭 유효 범위(blcok scope)를 갖는다.
let x = 1
console.log(x) // 1 => python 의 print와 같은 역할

x = 3
console.log(x) // 3

if (x === 3){
  let message = '안녕하세요'
  console.log(message) // '안녕하세요'
  console.log(x) // 3
}

// console.log(message) // Uncaught ReferenceError: message is not defined at 00_varialbe.html:31

z = 2 // var

let y

console.log(y)

// const
// 값이 변하지 않는 (재할당을 할 수 없는) 상수를 선언하는 키워드이다.
// let 과 동일하기 블록 유효 번위(block scope)를 가진다.
// "모든" 선언에서 가능한 상수를 사용해야 한다.


const MY_FAV = 20
if (MY_FAV === 20){
  const MY_FAV = 30
  console.log(MY_FAV)
}
console.log(MY_FAV)

// 식별자
// 변수명은 식별자라고 불린다.
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다.
// 2. 대소문자를 구분하고 class 이름을 제외하고는 대문자로 시작하지 않는 것을 권장한다.
// 3. 예약어 사용 불가 (const, let, class, return, case ... )


// 카멜 케이스 (camelCase) - 객체, 함수, 변수

// 이벤트 핸들러 - 'on' 으로 시작
const onClick = () => {}

// boolean 값 - 'is' 로 시작
let isAvailable = false

// 함수이름
function getUsername()


// 파스칼 케이스 (PascalCase) - 클래스, 생성자 (UpperCamelCase)
class User {}

// 대문자 스테이크 케이스 - 상수

const API_KEY = "asdfj;ji1o23no1no2b3o;1j32"



