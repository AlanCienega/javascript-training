let nums = [2, 2, 2];

const add = nums.reduce((acc, curr) => acc * curr);
const div = nums.reduce((acc, curr) => acc / curr);
const pow = nums.reduce((acc, curr) => acc ** curr);

console.log(add);
console.log(div);
console.log(pow);
