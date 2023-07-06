/**
 * function takes num, from 1 to num
 * log bizz if num multiples by 3
 * buzz if num multiples by 5
 * bizzbuzz if num multiples by 3 and 5
 * 7:39
 */

function bizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("bizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("bizz");
    } else {
      console.log(i);
    }
  }
}

bizzBuzz(30);
