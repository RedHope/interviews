module.exports = function(a, b) {
  let c;
  c = b;
  b = a;
  a = c;
  return [a, b];
};
