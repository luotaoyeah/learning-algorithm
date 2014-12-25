/*
 * Arrays
 *     Using Arrays
 *         Creating Arrays from Strings
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * String.prototype.split() 方法，返回一个数组
   */
  var str = "hello";
  var arr = str.split("");
  console.log(arr); // [ 'h', 'e', 'l', 'l', 'o' ]
})();
