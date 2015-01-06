/*
 * Arrays
 *     Using Arrays
 *         Aggregate Array Operations
 *             deep copy
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * 通过手动复制 array 的每一个元素，实现 array 的 deep copy
   */

  function deepCopy(fromArr, toArr) {
    for (var i = 0; i < fromArr.length; i++) {
      toArr[i] = fromArr[i];
    }
  }

  var arr01 = [1, 2, 3];
  var arr02 = [];
  deepCopy(arr01, arr02);

  arr01[1] = 9;
  arr02[2] = 99;

  console.log(arr01); // [ 1, 9, 3 ]
  console.log(arr02); // [ 1, 2, 99 ]
})();
