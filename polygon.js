/**
 * 1 = 1
 * 2 = 5
 * 3 = 13
 * 4 = 25
 *
 * n*n + (n-1) * (n-1)
 */

function polygon(num) {
  return num * num + (num - 1) * (num - 1);
}

console.log(polygon(3));
