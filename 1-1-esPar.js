let esPar = false;

function funcEsPar(num) {
  return num % 2 == 0;
}

if (process.argv.length !== 3) {
  console.log("usage: espar.js [num]");
  return 0;
} else {
  const par = funcEsPar(parseInt(process.argv[2]));
  console.log(par);
}
