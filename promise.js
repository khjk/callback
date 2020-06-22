//프로미스는 비동기를 간편하게 처리할수있도록 도와주는 자바스크립트 오브젝트
//state: pending -> fulfilled or rejected
//Producer vs Consumer

//Producer
//새로운 프로미스가 만들어질 때에는, executor(resloe,rejct)는 자동으로 바로 실행된다.
const promise = new Promise((resolve, reject) => {
  //read files, 네트워크로 데이터 받아오는 행위(비동기로 처리해야함)
  console.log("doing something");
  setTimeout(() => {
    resolve("hyojung");
  }, 1000);
});

//Consumer : then, catch, finally
promise
  .then((value) => {
    //then -> 프로미스 resolve 정상수행시 value로 hyojung들어옴
    console.log(value);
  })
  .catch((error) => {
    //catch -> 프로미스에서 reject 실행시
    console.log(error);
  })
  .finally(() => {
    console.log("실패나 성공이나 상과없이 실행");
  });

//Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) //2
  .then((num) => num * 3) //6
  .then((num) => {
    //6
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); ///5
    });
  })
  .then((num) => console.log(num));

//Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("chicken"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => egg`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => eggfry`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) //받아오는 value를 바로 다음함수에 인자로 넘겨줘서 생략가능 .then(getEgg)
  .catch(error => {
      return 'friedChiecken'; //계란받아오는거에 문제생겨도 오류처리..
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);  //결과 chicken => egg => eggfry