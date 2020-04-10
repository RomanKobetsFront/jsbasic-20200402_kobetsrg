/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let newStr = str.toLowerCase();
  return str.includes("1XbeT") || str.includes("xxx") ? true : false;
}
