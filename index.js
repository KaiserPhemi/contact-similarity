// modules imports
const phoneDirectory = require("./src/userObject");
const directory = phoneDirectory();

/**
 *
 * @param {object} arr1
 * @param {object} arr2
 */
const checkArrayItem = (arr1, arr2) => {
  return arr1.some((phoneNum) => arr2.indexOf(phoneNum) >= 0);
};

// const nuArr = directory.map((user, index) => {
//   console.log("we here", user[index]);
//   return user[index];
// });

/**
 * @desc
 */
// const checkArray = () => {
//   for (let k = 0; k < directory.length - 1; k++) {
//     for (let m = k + 1; m < directory.length; m++) {
//       let userArr1 = Object.values(directory[k])[0];
//       let userArr2 = Object.values(directory[m])[0];
//       let checkResult = checkArrayItem(userArr1, userArr2);
//       if (checkResult) {
//         console.log("arr1", userArr1, "arr2", userArr2);
//       }
//     }
//   }
// };

// checkArray();
console.log(directory);
