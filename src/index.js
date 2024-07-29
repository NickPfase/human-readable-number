module.exports = function toReadable (number) {
  const numberToWords = require('num-words');
  let g = numberToWords(number)
  let f = g.split(' ').filter(item => item !== 'and').join(' ');
  return f
}