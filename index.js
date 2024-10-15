// let input = prompt("Please Enter array elements:");
// let arr = input.split(" ").map(Number);

// function filterEvenNums(arr) {
//   let evenarr = [];
//   arr.forEach((element) => {
//     if (element % 2 === 0) {
//       evenarr.push(element);
//     }
//   });
//   return evenarr;
// }
// let evenNumbers = filterEvenNums(arr);
// console.log(evenNumbers);

// //---------------------
// function filterEvenNums2(arr) {
//   let evennums;
//   evennums = arr.filter((num) => num % 2 === 0);
//   return evennums;
// }

// console.log(filterEvenNums2(arr));

//===============================================================

// function findLarger(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   let max = arr[0];
//   arr.forEach((num) => {
//     if (num >= max) {
//       max = num;
//     }
//   });
//   return max;
// }
// theMax = findLarger(arr);
// console.log(theMax);
// //-------------------------
// function findmax(arr) {
//   let sortedArr = arr.sort((a, b) => b - a);
//   return sortedArr[0];
// }
// console.log(findmax(arr));

//=======================================================================

// function reverseword(word) {
//   let spreadword = word.split("").reverse();
//   let reverseword = [];
//   spreadword.forEach((element) => {
//     reverseword += element;
//   });
//   return reverseword;
// }
// let res = reverseword(arr);
// console.log(res);

// function reverseString(word) {
//   let reversed = [];
//   for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
//   }
//   return reversed;
// }

// console.log(reverseString(arr));

//=================================================================================

// function removeDup(arr) {
//   let done = [];
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     done = arr.filter((num) => num == arr[i]);
//     if (unique.includes(done[0])) {
//       continue;
//     } else {
//       unique.push(done[0]);
//     }
//   }
//   return unique;
// }

// console.log(removeDup(arr));

// function removedup(arr) {
//   let unique = [];
//   arr.forEach((num) => {
//     if (!unique.includes(num)) {
//       unique.push(num);
//     }
//   });
//   return unique;
// }

// console.log(removedup(arr));

//
//==============================================================
