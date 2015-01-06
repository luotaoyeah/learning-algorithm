/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.reduce()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * 最后一个元素的回调函数的返回值，
   * 会作为 reduce() 方法的返回值
   */

  console.log(
    [1, 2, 3, 4, 5].reduce(function(prevValue, currValue, currIndex) {
      return prevValue + currValue;
    }),
  ); // 15

  console.log(
    [1, 2, 3, 4, 5].reduce(function(prevValue, currValue, currIndex) {
      return prevValue + currValue;
    }, 10),
  ); // 25
})();
