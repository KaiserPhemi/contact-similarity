// modules imports
const uniqueUsers = require("./uniqueUserList");
const getNumList = require("./phoneNumberGenerator");

/**
 * @desc creates a directory of users' contact
 */
const phoneDirectory = () => {
  let users = [];

  for (let i = uniqueUsers.length - 1; i >= 0; i--) {
    let singleUser = {};
    singleUser[uniqueUsers[i]] = getNumList();
    users.push(singleUser);
  }
  return users;
};

module.exports = phoneDirectory;
