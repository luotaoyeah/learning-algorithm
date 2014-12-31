/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.reduceRight()
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * Array.prototype.reduceRight() 方法，跟 reduce() 方法一样，
   * 区别在于：从右往左进行循环
   */

  var arr = [1, 2, 3];

  console.log(
    arr.reduce(function(prevValue, currValue, currIndex) {
      return prevValue + "" + currValue;
    })
  ); // 123

  console.log(
    arr.reduceRight(function(prevValue, currValue, currIndex) {
      return prevValue + "" + currValue;
    })
  ); // 321
})();

console.log("\n-------------------------------------------------- 02");
(function() {
  /*
   * 可以先将数组反序，再使用 reduce() 方法，
   */

  var arr = [1, 2, 3];
  console.log(
    arr.reduceRight(function(prevValue, currValue, currIndex) {
      return prevValue + "" + currValue;
    })
  ); // 321

  console.log(
    arr.reverse().reduce(function(prevValue, currValue, currIndex) {
      return prevValue + "" + currValue;
    })
  ); // 321
})();
