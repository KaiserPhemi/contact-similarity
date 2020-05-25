// modules imports
const uniqueUsers = require("./uniqueUserList");
const getNumList = require("./phoneNumberGenerator");

/**
 * @desc creates a directory of users' contact
 */
const phoneDirectory = () => {
  const users = uniqueUsers.map((user) => {
    let name = user;
    let contacts = getNumList();
    return { name, contacts };
  });
  return users;
};

module.exports = phoneDirectory;
