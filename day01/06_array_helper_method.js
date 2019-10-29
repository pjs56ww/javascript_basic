// Array helper method

const colors = ['red', 'green', 'blue', 'salmon']

for (const color of colors){
  // console.log(color)
}

colors.forEach(color => console.log(color))


// map - 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 return
// 일정한 형식의 새로운 배열을 만들 때 사용한다.

const numbers = [1, 2, 3, 4]

const doubleNumbers = numbers.map(number => number * 2)

// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어 보자!
const numbers2 = [4, 9, 16]
const sqrt = number => Math.sqrt(number)
const sqrtNumbers = numbers2.map(number2 => Math.sqrt(number2)) // number2 ** 0.5
numbers.map(sqrt)
// numbers2.map(Math.sqrt)

// filter - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환
numbers.filter(number => {
  return number % 2 === 0
})

const products = [
  {name: 'cucumber', type: 'vege'}, 
  {name: 'banana', type: 'fruit'}, 
  {name: 'carrot', type: 'vege'}, 
  {name: 'apple', type: 'fruit'}
]
const fruits = products.filter(product => {
  return product.type === 'fruit'
})
