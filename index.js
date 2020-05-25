// modules imports
const phoneDirectory = require("./src/userObject");
const _ = require("lodash");

const directory = phoneDirectory();
const MIN_SIMILAR_CONTACTS = 0.3;

/**
 * @desc gets users with similar contacts
 */
const getSimilarContacts = () => {
  let similarContacts = [];
  for (let i = 0; i < directory.length - 1; i++) {
    const currUser = directory[i];
    for (let j = i + 1; j < directory.length; j++) {
      const nextUser = directory[j];
      const commonItems = _.intersection(currUser.contacts, nextUser.contacts);

      if (
        commonItems.length >
        MIN_SIMILAR_CONTACTS * currUser.contacts.length
      ) {
        const user1 = currUser.name;
        const user2 = nextUser.name;
        similarContacts.push({ user1, user2, commonItems });
      }
    }
  }
  return similarContacts;
};

console.log(getSimilarContacts());
