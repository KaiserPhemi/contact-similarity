// constants
const PHONE_NUMBER_PREFIX = ["070", "071", "080", "081", "090", "091"];
const MIN_CONTACT_LIST = 700;
const MAX_CONTACT_LIST = 900;

/**
 * @desc gets a phone number prefix randomly
 */
const numPrefix = () => {
  return PHONE_NUMBER_PREFIX[
    Math.floor(Math.random() * PHONE_NUMBER_PREFIX.length)
  ];
};

/**
 * @desc generates a random phone number
 */
const phoneNum = () =>
  "" + numPrefix() + Math.floor(10000000 + Math.random() * 90000000);

/**
 * @desc generates contact list capacity
 */
const arrLength = () => {
  const minList = Math.ceil(MIN_CONTACT_LIST);
  const maxList = Math.floor(MAX_CONTACT_LIST);
  return Math.floor(Math.random() * (maxList - minList + 1)) + minList;
};

/**
 * @desc generates an array of phone numbers
 */
const getNumList = () => {
  let phoneNumList = [];
  let counter = arrLength();
  while (counter > 0) {
    phoneNumList.push(phoneNum());
    counter--;
  }
  return phoneNumList.sort();
};

module.exports = getNumList;
