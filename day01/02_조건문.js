// if 문
// const username = prompt('안녕하세요? 당신은 누구세요?')

// let message = ''

// if (username === 'ssafy'){
//   message = '<h1>안녕하세요? ssafy 입니다.</h1>'
// } else if (username === 'admin') {
//   message = '<h1>주인님 안녕하세요</h1>'
// } else {
//   message = `<h1>Welcom ${ username }!</h1>`
// }
// document.write(message)


//swith 문

const username = prompt('Who are you?')

let message = ''
// break를 걸지 않으면 제대로 동작을 안함 => 순서대로 전부 동작하기 때문
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
document.write(message)

// switch(사용자) {
//   case '관리자': {
//     사용자.권한 += '관리자 페이지 접근'
//   }
//   case '일반_사용자': {
//     사용자.권한 += '쓰기'
//   }
//   default: {
//     사용자.권한 += '읽기'
//   }
// }
// 위와 같은 로직을 구현할 때 외에는 쓸 일이 많이 없다.
// 코드가 길기 때문

