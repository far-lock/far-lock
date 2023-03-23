const tap = require("tap");
const { getStars } = require("../index.js");

tap.equal(getStars(1), "🌟");
tap.equal(getStars(3), "🌟🌟🌟");
tap.throws(
  function () {
    getStars(-1);
  },
  {},
  { skip: true }
);
