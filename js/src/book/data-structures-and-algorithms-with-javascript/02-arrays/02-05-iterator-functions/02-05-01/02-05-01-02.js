/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.forEach()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * forEach() 方法，可以接收第二个参数：thisArg
   * 用于指定回调函数中的 this 对象
   */

  var arr = [1, 2, 3];
  const obj = { t: 3 };

  // 3
  // 6
  // 9
  arr.forEach(function(value, index, array) {
    console.log(this.t * value);
  }, obj);
})();
