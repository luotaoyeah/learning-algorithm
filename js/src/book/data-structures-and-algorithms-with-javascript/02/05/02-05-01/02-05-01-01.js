/*
 * Arrays
 *     Iterator Functions
 *         Non–Array-Generating Iterator Functions
 *             Array.prototype.forEach()
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Array.prototype.forEach() 方法，
   * 循环数组元素，将每一个元素作为参数传递给回调函数执行
   */

  var arr = [1, 2, 3];
  /*
   * 回调函数接收三个参数：当前元素，当前索引，当前数组
   */
  // index: 0, value: 1, array === arr: true
  // index: 1, value: 2, array === arr: true
  // index: 2, value: 3, array === arr: true
  arr.forEach(function(value, index, array) {
    console.log('index: ' + index + ', value: ' + value + ', array === arr: ' + (array === arr));
  });
})();
