/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.every()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 当所有元素让回调函数都返回 true 时，
   * 该 every() 方法才会返回 true
   *
   * 只要有一个元素让回调函数返回了 false
   * 则 every() 方法就会返回 false
   */

  var arr = [1, 2, 4];

  /*
   * 当某个元素让回调函数返回了 false 时，
   * 后面的元素就不会再执行了
   */
  console.log(
    // index: 0
    arr.every(function(value, index) {
      console.log("index:", index);
      return value % 2 === 0;
    })
  ); // false
})();
