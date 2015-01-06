/*
 * Arrays
 *     Using Arrays
 *         Aggregate Array Operations
 *             shallow copy
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * 当把一个 array 赋值给其他 variable 时，复制的是 array 的 reference
   * 即，进行的是浅拷贝（shallow copy）
   */

  var arr01 = [1, 2, 3];
  var arr02 = arr01;

  arr01[1] = 9;
  arr02[2] = 99;

  console.log(arr01); // [ 1, 9, 99 ]
  console.log(arr02); // [ 1, 9, 99 ]
  console.log(arr01 === arr02); // true
})();
