/**
 *
 * @param {string} val
 * @param {string} ext
 * @returns
 */
export const photoExt = (val, ext) => {
  if (val && ext) {
    return val.replace("{0}", ext);
  } else {
    return null;
  }
};
