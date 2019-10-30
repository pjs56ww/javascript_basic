# Javascript

#### 동적 웹 프로그래밍 언어

#### 멀티쓰레드 언어

- ##### javascript 설정

  1. ctrl + , 후 detect indentation 끄기

  2. settings.json => 

     ```json
     {
         "[javascript]": {
             "editor.tabSize": 2
         },
     }
     ```

- ##### javascript를 html 에 넣어주는 방법

  1. ###### html에 직접 넣기

     ```html
     <!DOCTYPE html>
     <html lang="ko">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Variable</title>
     </head>
     <body>
     
       <script>
         let x = 1
         console.log(x) // 1 => python 의 print와 같은 역할
       </script>
     </body>
     </html>
     ```

  2. ###### js 파일 만들기

     ```js
     // 00_variable.js
     let x = 1
     console.log(x) // 1 => python 의 print와 같은 역할
     
     x = 3
     console.log(x) // 3
     ```

     ```html
     // 00_variable.html
     <!DOCTYPE html>
     <html lang="ko">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Variable</title>
     </head>
     <body>
     
       <script src="00_variable.js"></script>
     </body>
     </html>
     ```

     

     

#### 성질

- javascript는 tag와 같은 역할을 하기 때문에 앞에 있으면 페이지를 보여주는데 오래 걸리기 때문에 javascript는 html 마지막에 들어가야 한다.

- 실제로 이벤트 같은 것을 등록하는 테그들은 먼저 나오게 되면 매개를 못찾게 될 수 있기 때문에 html에서 마지막에 들어가야 한다.

- 블럭 유효 범위(blcok scope, 중괄호)를 갖는다.

  ```javascript
  if (x === 3){
  	let x = '안녕하세요'
  	console.log(x)
  }
  console.log(x) // 에러 발생 => 블록을 벗어나면 x 는 존재하지 않는 것이 된다.
  ```

- 모든 변수는 재선언이 불가능하다.

- javascript 에서 undefined 는 값이 없음을 나타냄 => python 에서 None 과 동일




### 변수

#### let

- 값을 재할당 할 수 있는 변수를 선언하는 키워드

  - javascript에서 모든 변수는 재선언이 불가능하다. 하지만 다시 할당은 가능하다.

    ```javascript
    let x = 1
    let x = 2
    // 불가능
    ```

    ```javascript
    let x = 1
    x = 2
    // 가능
    ```

- 키워드가 있어야 변수 선언이 된다.



#### var

```javascript
var y = 2 // var
z = 2 // var
```

- 재선언이 가능하다. 이러한 성질 때문에 지금은 잘 사용하지 않는다.



#### const

- const는 반드시 값이 들어가야 한다.

  ```javascript
  const MY_FAV  // 에러 발생
  // Uncaught SyntaxError: Missing initializer in const declaration
  ```

  ```javascript
  const MY_FAV = 20
  ```

- 재할당이 불가능하다.

  ```javascript
  const MY_FAV = 20
  MY_FAV = 30 // 에러 발생
  // Uncaught TypeError: Assignment to constant variable.
  ```



#### 식별자

- 변수명은 식별자라고 불린다.

- 특징

  1. 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다.
  2. 대소문자를 구분하고 class 이름을 제외하고는 대문자로 시작하지 않는 것을 권장한다.
  3. 예약어 사용 불가 (const, let, class, return, case ... )

  

##### 카멜 케이스 (camelCase)

- 객체, 함수, 변수

  ```javascript
  // 이벤트 핸들러 - 'on' 으로 시작
  const onClick = () => {}
  
  // boolean 값 - 'is' 로 시작
  let isAvailable = false
  
  // 함수이름
  function getUsername()
  ```



##### 파스칼 케이스 (PascalCase)

- 클래스, 생성자 (UpperCamelCase)

  ```javascript
  class User {}
  ```



##### 대문자 스네이크 케이스

- 상수

  ```javascript
  const API_KEY = "asdfj;ji1o23no1no2b3o;1j32"
  ```

  



### 타입과 연산자

#### 타입

##### Numbers

```javascript
const a = 13 // int
const b = -5
const c = 3.14 // float
const d = 2.998e8 // 2.998 * 10^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number => 이상한 계산식이 들어갔을 때 나옴
```



##### Strings

```javascript
const sentence1 = 'Ask and go to the blue'  // javascript 는 single 을 권장
const sentence2 = "Ask and go to the blue"
const sentence3 = `Ask and go to the blue`
```

- ''를 사용하면 줄바꿈이 되지 않는다.

  ```javascript
  const word = '안녕
  하세요'
  // 에러 발생
  ```

  대신 escape sequence 사용 가능

  ```javascript
  const word1 = '안녕\n하세요'
  ```

- ``를 사용하면 줄바꿈을 사용할 수 있다.

  ```javascript
  const word2 = `안녕
  하세요`
  ```

  escape sequence 는 사용이 불가능 하지만 Template Literal 사용 가능

  ```javascript
  const age = 10
  const message = `홍길동의 나이는 ${ age }`
  ```



##### Boolean

```javascript
true
false
```



##### Empty Value

```javascript
undefined
null
```

- 값이 존재하지 않음을 표현하는 값
- 설계 실수로 같은 기능을 하는 2가지 value 가 만들어짐

```javascript
let firstName // 선언하고 할당하지 않음 => undefined
let students = {}
students.jason // undefined
let lastName = null // 우리가 의도적으로 값이 없음을 표시할 때

typeof null // object
typeof undefined // undefined
```





#### 연산자

##### 할당연산자

- 할당하면서 그 자리에서 연산까지 해주는 연산자

  ```javascript
  let x = 0
  x += 10  // 10
  x -= 3  // 3
  x *= 3  // 21
  x++  // 21
  x  // 22
  ++x  // 23
  ```



##### 비교연산자

```javascript
3 > 2 // true
3 < 2 // false
```

- 문자열 비교도 가능하다.

  - 영어 소문자가 대문자보다 크다.
  - 알파벳은 오름차순이다.

  ```javascript
  'A' < 'B'    // true
  'A' < 'a'    // true
  '가' < '나'  // true
  ```

- 동등연산자 (==)

  - 서로 같은 값을 갖도록 변환할 수 있으면 같다고 판단한다.
  -  (JS 엔진이 자동으로 형변환) => 동등 연산자의 사용은 지양한다.

  ```javascript
  const a1 = 1
  const b1 = '1'
  
  a1 == b1  // true
  a1 == Number(b1) // ture
  
  // 일치 연산자 (===), (!==)
  1 === '1'  // false
  1 === Number('1')  // true
  ```



##### 논리연산자

- and, or, not을 포함한다.

- and

  ```javascript
  true && true  // true
  true && false // flase
  false && false // flase
  1 && 1 // 1
  1 && 0 // 0
  ```

- or

  ```javascript
  // or
  true || true // true
  true || false // true 
  false || false // false
  ```

- not

  ```javascript
  // not
  !true // false
  !false // true
  
  ```



##### 삼항연산자

- 가장 앞의 boolean 값이 참이면 : 앞의 값이 반환 , 그렇지 않다면 : 뒤의 값이 반환된다.

```javascript
let flag = true
flag ? '참이니' : '거짓이니'
```



### 조건문

#### if문

```javascript
const username = prompt('안녕하세요? 당신은 누구세요?')
let message = ''
if (username === 'ssafy'){
  message = '<h1>안녕하세요? ssafy 입니다.</h1>'
} else if (username === 'admin') {
  message = '<h1>주인님 안녕하세요</h1>'
} else {
  message = `<h1>Welcom ${ username }!</h1>`
}
document.write(message)
```



#### switch문

- break를 걸지 않으면 제대로 동작을 안함 => 순서대로 전부 동작하기 때문

```javascript
const username = prompt('Who are you?')
let message = ''
switch(username) {
  case 'ssafy': {
    message = '<h1>안녕하세요? ssafy 입니다.</h1>'
    break
  }
  case 'admin': {
    message = '<h1>주인님 안녕하세요</h1>'
    break
  }
  default: {
    message = `<h1>Welcom ${ username }!</h1>`
    break
  }
}
```

```javascript
switch(사용자) {
  case '관리자': {
    사용자.권한 += '관리자 페이지 접근'
  }
  case '일반_사용자': {
    사용자.권한 += '쓰기'
  }
  default: {
    사용자.권한 += '읽기'
  }
}
```

- 코드가 길기 때문에 위와 같은 로직을 구현할 때 외에는 쓸 일이 많이 없다.





### 반복문

#### for 문

```javascript
for (let i = 0; i < 5; i++){
  console.log(i)
}

const numbers = [0, 1, 2, 3, 4, ]

for (const number of numbers){
  console.log(number)
}
```



#### while 문

```javascript
let i = 0
while (i < 5){
  console.log(i)
  i++
}
```





### 함수

#### 함수선언식

```javascript
function add(num1, num2) {
  return num1 + num2
}
console.log(add(1, 2)) // 3
```

#### 함수표현식

```javascript
const sub = function(num1, num2) {
  return num1 - num2
}
```

- 함수 선언식은 선언만 되어있으면 바로 알 수 있게 설계가 되어 있다.
- 함수 표현식은 선언한 위치까지 왔을 때부터 알 수 있다.

#### Arrow Function

- ES6 버젼부터 사용가능

```javascript
addOne = (num) => {
  return num + 1
}
```

- 중괄호를 제거하면 바로 return하겠다는 의미를 갖는다.

  ```javascript
  addOne = num => num + 1
  ```

- 함수의 내용이 두 줄 이상이면 중괄호를 써줘야 한다.

  ```javascript
  addOne = num => {
      num += 1
      num -= 10
      return num
  }
  ```

- 변수가 2 개 이상이면 변수에 소괄호를 써줘야 한다.

  ```javascript
  addOne = (num1, num2) => num1 + num2
  ```

- Object 같은 경우 중괄호가 있어 함수의 중괄호와 헷갈릴 수 있기 때문에 Object 주위에 소괄호를 쳐줘야한다.

  ```javascript
  const makeObject2 = value => ({'key': value})
  ```

- 받는 instance 가 하나도 없으면 비어있는 소괄호를 넣어주어야 한다.

  ```javascript
  const noArgs = () => 'No args'
  ```





### Datastructure

#### Array

```javascript
const numbers = [1, 2, 3, 4]
numbers[0]  // 1
numbers[-1]  // undefined
numbers.length  // 4
numbers.reverse() // [4, 3, 2, 1] 원본을 파괴시킨다.
numbers // [4, 3, 2, 1]
numbers.reverse() // [1, 2, 3, 4]
numbers // [1, 2, 3, 4]
```

- push를 통해 가장 마지막에 배열에 아이템 추가하면 배열의 길이 값이 반환된다.

  ```javascript
  numbers.push(8) // 5
  ```

- pop을 통해 가장 마지막 요소를 제거하면 제거한 요소가 반환된다.

  ```javascript
  numbers.pop()  // 8
  ```

- unshift를 통해 가장 앞에 요소를 추가하면 배열의 길이 값이 반환된다.

  ```javascript
  numbers.unshift('a')  // 5
  ```

- shift를 통해 가장 앞에 요소를 제거하면 제거한 요소가 반환된다.

  ```javascript
  numbers.shift() // 'a'
  ```

- includes는 특정 아이템이 배열에 있는지 여부를 반환한다.

  ```javascript
  numbers.includes(0)  // false
  numbers.includes(1)  // true
  ```

- indexOf는 특정 아이템의 index 를 찾아서 반환한다.

  - 일치하는 가장 첫번째 아이템의 인덱스를 반환한다.
  - 일치하는 값이 없다면 -1을 반환한다.

  ```javascript
  numbers.push('a')
  numbers.push('a')  // [1, 2, 3, 4, 5, 'a', 'a']
  numbers.indexOf('a') // 5, 일치하는 가장 첫번째 아이템의 인덱스를 반환
  numbers.indexOf('b') // -1, 일치하는 값이 없다면 -1 반환
  ```

- join 배열의 아이템을 함수의 인자를 serperator 로 이어서 문자열로 반환

  ```javascript
  numbers.join()  // "1,2,3,4,a,a"
  numbers.join('')  // "1234aa"
  numbers.join('-')  // "1-2-3-4-a-a"
  ```





#### Object

##### Object와 JSON 의 차이점

```python
# Object: JS Engine 메모리 안에 있는 데이터 구조. 형식이 JS Object 이다.
# JSON: 객체의 내용을 기술하기 위한 text 파일. 형식이 String 이다.
```

##### object

python의 dictionary 와 유사한 datastructure

```javascript
const me = {
  name: 'ssafy',
  'phone number': '010-1234-5678',
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}
```

- value 에 접근하는 방법은 아래와 같이 2가지 방법이 있다.

  ```javascript
  me.name
  me['name']
  // 'phone number' 와 같은 형태의 key는 me.phone number가 안되기 때문에 me['phone number'] 로만 value 에 접근할 수 있다.
  ```

- 변수의 이름과 key 의 이름이 같다면 `name: name, => name,` 으로 생략 가능하다. => Object Literal

  ```javascript
  const name = 'JS'
  
  const user = {
    name,  // 변수의 이름과 key 의 이름이 같다면 `name: name, => name,` 으로 생략 가능 => Object Literal
    'phone number': '010-1234-5678',
    appleProducts: {
      macbook: '2018pro',
      iphone: '7',
    }
  }
  ```

- 직렬화 (JS Object => JSON)

  ```javascript
  const jsonData = JSON.stringify(user)  // 직렬화
  ```

- 역직렬화 (JSON => JS Object)

  ```javascript
  const parsedData = JSON.parse(jsonData)
  ```





### Array helper method

##### forEach

```javascript
const colors = ['red', 'green', 'blue', 'salmon']
// 1
for (const color of colors){
  console.log(color)
}
// 2
colors.forEach(color => console.log(color))
// 1, 2 둘 다 같은 역할을 한다.
```

##### map

- 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 return 한다.
- 일정한 형식의 새로운 배열을 만들 때 사용한다.

```javascript
const numbers = [1, 2, 3, 4]

const doubleNumbers = numbers.map(number => number * 2)
```

##### filter

- 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 return 한다.

```javascript
numbers = [1, 2, 3, 4, 5, 6]
numbers.filter(number => {
  return number % 2 === 0
})  // [2, 4, 6]
```



