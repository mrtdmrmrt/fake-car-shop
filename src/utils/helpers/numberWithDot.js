/**
 *
 * @param {string} num
 * @returns
 */
export const numberWithDot = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
