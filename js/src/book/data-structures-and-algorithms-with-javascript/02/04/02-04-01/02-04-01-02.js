/*
 * Arrays
 *     Mutator Functions
 *         Adding Elements to an Array
 *             Array.prototype.unshift()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.unshift() 方法，
   * 将多个元素插入到数组的最前面
   */

  var arr = [4, 5, 6];
  arr.unshift(1, 2, 3);
  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
})();

console.log('\n-------------------------------------------------- 02');
(function() {
  /*
   * 使用手动的方式往数组的最前面插入元素时，
   * 需要将其他的元素依次往后面移动位置
   */
  var arr = [4, 5, 6];

  function myPush(arr, item) {
    for (var i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = item;
  }

  myPush(arr, 3);
  myPush(arr, 2);
  myPush(arr, 1);
  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
})();
