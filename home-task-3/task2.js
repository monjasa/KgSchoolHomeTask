const ELLIPSIS_CHARACTER = '…';

function ellipsis(str, max) {
  return str.length > max
    ? str.substring(0, max - 1).concat(ELLIPSIS_CHARACTER)
    : str;
}

console.log(ellipsis("Today is rainy Sunday", 15));
console.log(ellipsis("Full text.", 15));
