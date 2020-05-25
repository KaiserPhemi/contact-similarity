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

/**
 * @desc gets users with similar contacts
 */
const getSimilarContacts = () => {
  let userDetail = {};
  let prevArr;
  const similarContactList = directory.forEach((user, index) => {
    const currArr = user.contacts;
    if (currArr === prevArr) {
      console.log("we inside");
      const contactExist = prevArr.some(
        (contact) => currArr.indexOf(contact) >= 0
      );
      if (contactExist) {
        console.log("we here", prevArr, currArr);
      }
    }
    prevArr = currArr;
  });
};

console.log(getSimilarContacts());
