/*
 * Arrays
 *     Iterator Functions
 *         Iterator Functions That Return a New Array
 *             Array.prototype.map()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.map() 方法，
   * 对数据元素进行隐射，返回映射之后的新数组
   */

  console.log(
    [1, 2, 3].map(function(value, index, arr) {
      return value * value;
    })
  ); // [ 1, 4, 9 ]

  console.log(
    ["for", "your", "information"]
      .map(function(value, index, array) {
        if (value && value.length > 0) {
          return value[0];
        } else {
          return "";
        }
      })
      .join("")
      .toUpperCase()
  ); // FYI
})();
