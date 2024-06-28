https://www.youtube.com/watch?v=mYHVOTxEwlY&list=PLZ5oZ2KmQEYgab5iy6_L8XGMKxhCAN8RV&index=3

// 1. 로그인
function 로그인(사용자명) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (사용자명 === 'krdn') {
        resolve(사용자명);
      } else {
        reject(new Error(`${사용자명} 사용자를 찾을 수 없습니다.`));
      }
    }, 1000);
  });
}

// 2. 장바구니에 넣기
function 장바구니에넣기(상품) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (상품 === '사과') {
        resolve(상품);
      } else {
        reject(new Error(`${상품} 상품을 찾을 수 없습니다.`));
      }
    }, 1000);
  });
}

// 3. 결제하기
function 결제하기(카드번호, 상품) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (카드번호 === '1234' && 상품 === '사과') {
        resolve(`${상품} 상품을 결제했습니다.`);
      } else {
        reject(new Error(`결제 실패`));
      }
    }, 1000);
  });
}
  
// 순차적으로 실행 - Promise Chaining
로그인('krdn')
  .then(사용자명 => {
    console.log(`${사용자명} 로그인 성공`);
    return 장바구니에넣기('사과');
  })
  .then(상품 => {
    console.log(`${상품} 장바구니에 담기 성공`);
    return 결제하기('1234', 상품);
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
