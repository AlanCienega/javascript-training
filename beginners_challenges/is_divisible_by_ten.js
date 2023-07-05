function isDivisibleByTen(num) {
  return num % 10 == 0;
}

if (process.argv.length != 3) {
  console.log("usage : is_divisible_by_ten.js [number]");
} else {
  console.log(isDivisibleByTen(process.argv[2]));
}
