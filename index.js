//callbacks, because of nesting it'll creating callback hell.

function callBack() {
  console.log('I am first function');
  setTimeout(() => {
    console.log('I am second function');
  }, 2000);
  console.log('I am third function');
}
callBack();

//-------------------------------------------------

//Promises are introduced to avoid callback hell.

function myFirstPromise(value, condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve(value + 10);
      }, 2000);
    } else {
      reject('Promise is 1st rejected');
    }
  });
}

function mySecondPromise(value, condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve(value + 10);
      }, 2000);
    } else {
      reject('Promise is 2nd rejected');
    }
  });
}

function myThirdPromise(value, condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => {
        resolve(value + 10);
      }, 2000);
    } else {
      reject('Promise is 3rd rejected');
    }
  });
}

myFirstPromise(10, true)
  .then((ans1) => mySecondPromise(ans1, true))
  .then((ans2) => myThirdPromise(ans2, false)) //true for result
  .then((ans3) => console.log(ans3))
  .catch(() => {
    console.log('errorMsg');
  });

//----------------------------------------------------------------

//async await to avoid chaining.
//with only async we will get promise, with await we'll directly get the result.

let URL = 'https://restcountries.com/v2/all';

async function myAsyncfunc(link) {
  try {
    let result = fetch(link);
    let countries = result.then((res) => res.json());
    console.log(countries);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
myAsyncfunc(URL);

//to solve the above problem and to avoid chaining we use async await.

async function myAsyncfunc(link) {
  try {
    let result = await fetch(link);
    let countries = await result.json();
    console.log(countries);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
myAsyncfunc(URL);
