function 이름가져오기() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('철수');
      // reject(new Error('이름 에러발생'));
      // reject('에러발생');
    }, 1000);
  });
}


function 할일가져오기() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('밥먹기');
      // reject(new Error('할일 에러발생'));
    }, 2000);
  });
}

// 순차적으로 실행
// 이름가져오기().then((이름) => {
//   console.log(이름);
//   return 할일가져오기();
// }).then((할일) => {
//   console.log(할일);
// }).catch((error) => {
//   console.error(error);
// });


// 동시(병렬)에 실행
// Promise.all 
//  - 여러개의 프로미스를 동시에 실행하고, 모든 프로미스가 성공적으로 완료되었을 때만 then을 실행
//  - 하나라도 실패하면 catch를 실행
// Promise.all([이름가져오기(), 할일가져오기()]).then((values) => {
//   console.log(values);
// }).catch((error) => {
//   console.error(error);
// });

// Promise.allSettled
//  - 여러개의 프로미스를 동시에 실행하고, 모든 프로미스가 완료되었을 때만 then을 실행
//  - 성공과 실패 여부에 상관없이 모든 프로미스가 완료되면 then을 실행
// Promise.allSettled([이름가져오기(), 할일가져오기()]).then((values) => {
//   console.log(values);
// }).catch((error) => {
//   console.error(error);
// });

// Promise.any  
//  - 여러개의 프로미스를 동시에 실행하고, 가장 먼저 성공적으로 완료된 프로미스만 then을 실행
//  - 모든 프로미스가 실패하면 catch를 실행
// Promise.any([이름가져오기(), 할일가져오기()]).then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.error(error);
// });

// Promise.race
//  - 여러개의 프로미스를 동시에 실행하고, 가장 먼저 완료된 프로미스만 then을 실행
//  - 가장 먼저 완료된 프로미스가 실패하면 catch를 실행
Promise.race([이름가져오기(), 할일가져오기()]).then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error);
});





