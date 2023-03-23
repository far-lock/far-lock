/**
 * getStars is function to get a string containing the amount of stars you want.
 * @function getStars
 * @param {number} numberOfStars - The number of stars you want to display.
 */
exports.getStars = function (numberOfStars) {
  return "🌟".repeat(numberOfStars);
};

/**
 * getUnicorns is function to get a string containing the amount of unicorns you want.
 * @function getUnicorns
 * @param {number} numberOfUnicorns - The number of unicorns you want to display.
 */
exports.getUnicorns = function (numberOfUnicorns) {
  return "🦄".repeat(numberOfUnicorns);
};
