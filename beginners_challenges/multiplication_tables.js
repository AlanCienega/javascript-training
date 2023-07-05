function multiplicationTables(number) {
  for (let i = 1; i <= 10; i++) {
    console.table(`${number} X ${i} = ${number * i}`);
  }
}

if (process.argv.length != 3) {
  console.log('usage: multiplication_tables.js [number]');
}else{
  multiplicationTables(parseInt(process.argv[2]))
}
