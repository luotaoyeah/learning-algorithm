/*
 * Arrays
 *     Using Arrays
 *         Accessing and Writing Array Elements
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 可以通过数组索引访问元素：array[index]
   */
  var arr = ["a", "b", "c"];
  console.log(arr[1]); // b
})();

console.log("\n-------------------------------------------------- 02");
(function() {
  /*
   * 因为 array 是特殊的 object，因此通过索引访问数组元素，
   * 其实就是类似于通过 obj[prop] 的方式访问对象属性
   */

  var arr = ["a", "b", "c"];
  console.log(arr["1"]); // b
})();
