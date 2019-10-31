function sleep_3() {
  setTimeout(function() { // 비동기함수 => 처리가 끝날 때까지 기다리지 않아도 되는 함수  =>  한번에 두 가지 이상의 일을 처리할 수 있기 때문에 좋은 기능
    console.log('Wake Up!')
  }, 3000)
}

console.log('Start sleeping')
sleep_3()
console.log('End of Program')