// modules imports
const phoneDirectory = require("./src/userObject");
const directory = phoneDirectory();

/**
 * @desc gets users with similar contacts
 */
const getSimilarContacts = () => {
  // let prevArr = null;

  // const contactArr = directory.map((user) => user.contacts);
  // // console.log(contactArr);

  // // for (const user of directory) {
  // //   const currArr = user.contacts;
  // //   const similarityLevel = null;
  // //   if (prevArr === currArr) {
  // //     console.log("current user", user.name);
  // //     const isSimilar = currArr.some((item) => contactArr.inclues(item));
  // //     if (isSimilar) {
  // //       commonContact.push({ ...user });
  // //     }
  // //   }

  // //   prevArr = currArr;
  // // }

  // return commonContact;

  let commonContact = [];
  for (let i = 0; i < directory.length - 1; i++) {
    const currUser = directory[i];
    for (let j = i + 1; j < directory.length; j++) {
      const nextUser = directory[j];
      const isSimilar = currUser["contacts"].some((item) => {
        return nextUser["contacts"].includes(item);
      });
      if (isSimilar) {
        commonContact.push({ currUser, nextUser });
      }
    }
  }
  return commonContact;
};

console.log(getSimilarContacts());
