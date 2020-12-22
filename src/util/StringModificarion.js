/**
 * truncates a string after given length
 * @param {string} str
 * @param {number} length
 * @return {string|*}
 */
export const truncate = (str, length = 10) => {
    if (str.length <= length) return str;
    return `${str.slice(0, length)}...`;
  };