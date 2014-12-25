/*
 * Arrays
 *     Using Arrays
 *         Creating Arrays
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 可以直接使用 [] 创建数组
   */
  var arr = [1, 2, 3];
  console.log(arr.length); // 3
})();

console.log("\n-------------------------------------------------- 02");
(function() {
  /*
   * 可以使用 Array() 构造函数创建数组
   */

  var arr = new Array(1, 2, 3);
  console.log(arr); // [ 1, 2, 3 ]
  console.log(arr.length); // 3
})();

console.log("\n-------------------------------------------------- 03");
(function() {
  /*
   * 当 Array() 构造函数只接收一个 number 类型的参数时，
   * 该参数表示数组的 length 属性，
   * 该数组的所有元素都为空
   */

  var arr = new Array(3);
  console.log(arr.length); // 3
  console.log(arr); // [ undefined, undefined, undefined ]
})();
