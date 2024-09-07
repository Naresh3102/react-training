// import export

// Named export
export let firstName = "naresh";
export let initial = "S";

// Default export
let location = "erode";

// Only one default for one file
export default location;

const handleSumbit = () => {
  setTimeout(() => {
    console.log("inside the anonymous function");
  }, 2000);
};

// const arr = [10, 20]

// // let num1 = arr[0]
// // let num2 = arr[1]

// let num1, num2 = arr;

// const obj = {
//   num1: 10,
//   num2: 20,
// };

// console.log(obj.num1);
// console.log(obj.num2);

// const {num1, num2} = obj;

// console.log(num1);
// console.log(num2);

// handleObj(obj);

// function handleObj({ num1, num2 }) {
//   console.log(num1);
//   console.log(num2);
// }

// const arr = [1, 2, 3, 4, 5];

// // [10, 20, 30, 40 ,50]

// const resultArray= arr.map((num) => {
//     return num * 10;
// })

// const resultArray1 = arr.map((num) => num * 10)

// console.log(resultArray);
// console.log(resultArray1);

// // [2, 4]
// const resultEven = arr.filter((num) => num%2 === 0)

// const resultOdd = arr.filter((n) => n%2 !== 0)

// console.log(resultEven);
// console.log(resultOdd);

// const arr = [1, 2, 3, 4, 5];

// // Spread

// // [1, 2, 3, 4, 5, 6]
// const newArr = [...arr, 6];

// console.log(newArr);

// // Rest

// const obj = {
//   name: "naresh",
//   location: "erode",
//   role: "trainer/developer",
// };

// const { role, ...otherValues } = obj;

// handleObj(obj)

// function handleObj({ role, ...otherValues }) {
//   console.log(role);
//   console.log(otherValues);
// }

async function fetchData() {
  const response = await fetch("https://express-demo-naresh.vercel.app/user");
  const data = await response.json();
  console.log(data);
}

fetchData();
