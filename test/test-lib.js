const tap = require("tap");
const { getStars, getUnicorns } = require("../index.js");

tap.equal(getStars(1), "🌟");
tap.equal(getStars(3), "🌟🌟🌟");
tap.throws(
  function () {
    getStars(-1);
  },
  {},
  { skip: true }
);

tap.equal(getUnicorns(1), "🦄");
tap.equal(getUnicorns(3), "🦄🦄🦄");
tap.throws(
  function () {
    getUnicorns(-1);
  },
  {},
  { skip: true }
);
