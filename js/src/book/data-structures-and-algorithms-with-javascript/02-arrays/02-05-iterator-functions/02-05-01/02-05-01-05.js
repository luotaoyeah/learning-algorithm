/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.some()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.some() 方法，跟 every() 方法类似，
   * 但是 some() 方法的逻辑是：只要有一个元素让回调函数返回了 true
   * 则 some() 方法就会返回 true，后面的元素就不会再执行了
   */

  var arr = [2, 5, 6];

  console.log(
    // index: 0
    // index: 1
    arr.some(function(value, index, array) {
      console.log("index:", index);
      return value % 2 === 1;
    })
  ); // true
})();
