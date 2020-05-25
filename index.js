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

const getSimilarContacts = () => {
  let userDetail = {};
  const similarContactList = directory.map((user, index) => {});
};

console.log(directory);
