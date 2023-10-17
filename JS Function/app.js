// ! TASK 1
// let numArr = [5, 10, 2, 8, 12]

// function calculateDifference(arr) {
//     let evenSum = 0
//     let oddSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenSum += arr[i]
//         }
//         else {
//             oddSum += arr[i];
//         }
//     }
//     let difference = evenSum - oddSum;
//     return difference
// }

// console.log(calculateDifference(numArr))

// ! TASK 2
// let numArr = [12, 45, 10, 876, 243]

// function calculateDifference(arr) {
//     let sum1 = 0
//     let sum2 = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (numArr[i] >= 100 && arr[i] <= 999) {
//             sum1 += arr[i];
//         }
//         else {
//             sum2 += arr[i];
//         }
//     }

//     return sum1 - sum2
// }

// console.log(calculateDifference(numArr))

// ! TASK 3
// function findDivisorsWithEqualParts(num) {
//   for (let i = 1; i < num; i++) {
//     let quotient = Math.floor(num / i);
//     let remainder = num % i;
//     if (quotient === remainder) {
//       console.log(`Tam: ${quotient}, Qalıq: ${remainder}`);
//     }
//   }
// }
// let num = 20;
// findDivisorsWithEqualParts(num);

// ! TASK 4
// function findSymmetryDegree(n) {
//   let strNum = n.toString();
//   let length = strNum.length;
//   let symmetryDegree = 0;
//   for (let i = 0; i < Math.floor(length / 2); i++) {
//     if (strNum[i] === strNum[length - 1 - i]) {
//       symmetryDegree++;
//     }
//   }

//   return symmetryDegree;
// }

// let num = 1221;
// let result = findSymmetryDegree(num);
// console.log(`${num} ədədinin simmetriya dərəcəsi: ${result}`);

// ! TASK 5
// function checkQualification(average, informaticsGrade) {
//   if (
//     average >= 3.5 &&
//     (informaticsGrade === "A" || informaticsGrade === "B")
//   ) {
//     return "Təbriklər, final turuna keçdiniz!";
//   } else {
//     return "Üzr istəyirik, final turuna keçə bilmədiniz.";
//   }
// }

// let studentAverage = 3.7;
// let informaticsGrade = "A";

// let result = checkQualification(studentAverage, informaticsGrade);
// console.log(result);

// ! TASK 6
// function filterArray(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let found = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         found = true;
//       }
//     }
//     if (!found) {
//       console.log(arr1[i]);
//     }
//   }
// }
// let firstArray = [1, 2, 3, 4, 5];
// let secondArray = [3, 5, 7, 9];

// filterArray(firstArray, secondArray);
