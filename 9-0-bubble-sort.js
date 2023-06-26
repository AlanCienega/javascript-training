let nums = [5, 3, 4, 2];
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    console.log(nums);
    if (nums[j] > nums[j + 1]) {
      console.table(`${nums[j]} > ${nums[j + 1]}`);
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}
console.log();
console.log(nums);
