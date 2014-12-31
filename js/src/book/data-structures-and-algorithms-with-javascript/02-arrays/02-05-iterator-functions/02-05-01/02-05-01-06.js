/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.reduce()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.reduce() 方法，
   * 对数组中的所有元素进行'累加'，最后返回一个最终结果
   */

  var arr = [1, 2, 3];

  /*
   * 上一个元素的回调函数的返回值，会作为下一个元素的回调函数的第一个参数
   *
   * 如果没有指定第二个参数（初始值），
   * 则第一个元素会被作为初始值，然后从第二个元素开始循环
   */
  // prevValue: 1 currValue: 2
  // prevValue: 3 currValue: 3
  arr.reduce(function(prevValue, currValue, currIndex) {
    console.log("prevValue: " + prevValue + " currValue: " + currValue);
    return prevValue + currValue;
  });
})();

console.log("\n-------------------------------------------------- 02");
(function() {
  /*
   * 如果指定了第二个参数（初始值），
   * 则从第一个元素开始循环
   */

  // prevValue: 0 currValue: 1
  // prevValue: 1 currValue: 2
  // prevValue: 3 currValue: 3
  [1, 2, 3].reduce(function(prevValue, currValue, currIndex) {
    console.log("prevValue: " + prevValue + " currValue: " + currValue);
    return prevValue + currValue;
  }, 0);
})();
