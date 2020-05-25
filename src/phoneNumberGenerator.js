// constants
const PHONE_NUMBER_PREFIX = ["070", "071", "080", "081", "090", "091"];
const MIN_CONTACT_LIST = 700;
const MAX_CONTACT_LIST = 900;

// generate random numbers
const phoneNum = () => Math.floor(10000000 + Math.random() * 90000000);
const arrLength = () => {
  const minList = Math.ceil(MIN_CONTACT_LIST);
  const maxList = Math.floor(MAX_CONTACT_LIST);
  return Math.floor(Math.random() * (maxList - minList + 1)) + minList;
};

// console.log(phoneNum);
const getNumList = () => {
  let num = [];
  for (let i = 1; i <= 400; i++) {
    num.push(phoneNum());
  }
  console.log(num);
};

getNumList();
console.log(arrLength());
