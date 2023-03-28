const tap = require("tap");
const { getStars, getUnicorns, getGuitars, fibonacci } = require("../index.js");

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

tap.equal(getGuitars(1), "🎸");
tap.equal(getGuitars(3), "🎸🎸🎸");

tap.equal(fibonacci(3), 2);
tap.equal(fibonacci(5), 5);
tap.equal(fibonacci(8), 21);
