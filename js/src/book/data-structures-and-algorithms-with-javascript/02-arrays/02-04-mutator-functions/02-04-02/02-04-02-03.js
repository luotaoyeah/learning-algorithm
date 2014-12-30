/*
 * Arrays
 *     Mutator Functions
 *         Removing Elements from an Array
 *             Array.prototype.shift()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 使用手动的方式，从数组的最前面移除一个元素，
   * 需要将其他的元素都向左移动一个位置，并将数组长度减一
   */

  /**
   *
   * @param arr
   * @return {*}
   */
  function myShift(arr) {
    if (arr.length === 0) {
      return undefined;
    }

    var n = arr[0];

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }

    arr.length -= 1;

    return n;
  }

  var arr = [1, 2, 3, 4];
  var n = myShift(arr);
  console.log(n); // 1
  console.log(arr); // [ 2, 3, 4 ]

  console.log(myShift([])); // undefined
})();
