// Array
const numbers = [1, 2, 3, 4]

numbers[0]  // 1

numbers[-1]  // undefined

numbers.length  // 4
numbers.reverse() // [4, 3, 2, 1] 원본을 파괴시킨다.
numbers // [4, 3, 2, 1]
numbers.reverse() // [1, 2, 3, 4]
numbers // [1, 2, 3, 4]


// 가장 마지막에 배열에 아이템 추가하기
numbers.push(5) // 5 => 추가 후 배열의 길이 값을 반환

numbers.push('ABC') // 6


// 가장 마지막 요소 삭제 후 반환
numbers.pop()  // 'ABC'
numbers // [1, 2, 3, 4, 5]

// 가장 앞에 요소 추가
numbers.unshift('a')  // 6 => 추가 후 배열의 길이 값을 반환
numbers  // ['a', 1, 2, 3, 4, 5]

// 첫번째 요소 제거 후 반환
numbers.shift() // 'a', 제거한 아이템
numbers  // [1, 2, 3, 4, 5]

// includes - 특정 아이템이 배열에 있는지 여부를 반환
numbers.includes(0)  // false
numbers.includes(1)  // true

// indexof - 특정 아이템의 index 를 찾아서 반환
numbers.push('a')
numbers.push('a')  // [1, 2, 3, 4, 5, 'a', 'a']
numbers.indexOf('a') // 5, 일치하는 가장 첫번째 아이템의 인덱스를 반환
numbers.indexOf('b') // -1, 일치하는 값이 없다면 -1 반환

// .join() 배열의 아이템을 함수의 인자를 serperator 로 이어서 문자열로 반환
numbers.join()  // "1,2,3,4,5,a,a"
numbers.join('')  // "12345aa"
numbers.join('-')  // "1-2-3-4-5-a-a"

numbers  // [1, 2, 3, 4, 5, 'a', 'a']


// Object

const me = {
  name: 'ssafy',
  'phone number': '010-1234-5678',
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}

me.name  // "ssafy"
me['name']  // "ssafy"
me['phone number']  // "010-1234-5678"
me.appleProducts.iphone  // "7"

const name = 'JS'

const user = {
  name,  // 변수의 이름과 key 의 이름이 같다면 `name: name, => name,` 으로 생략 가능 => Object Literal
  'phone number': '010-1234-5678',
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}


// JSON

const jsonData = JSON.stringify(user)  // 직렬화 => JS Object 를 String 값으로

const parsedData = JSON.parse(jsonData)  // 역직렬화 => String 을 JS Object 로

