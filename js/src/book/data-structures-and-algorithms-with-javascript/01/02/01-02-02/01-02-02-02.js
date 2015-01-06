/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Arithmetic and Math Library Functions in JavaScript
 *             Math
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * Math 全局对象上包含了常用的数据工具方法
   */
  /* 绝对值 */
  console.log(Math.abs(-9.9)); // 9.9
  /* 平方根 */
  console.log(Math.sqrt(9)); // 3
  /* 四舍五入 */
  console.log(Math.round(1.5)); // 2
  /* 幂 */
  console.log(Math.pow(2, 10)); // 1024
  /* 最大值 */
  console.log(Math.max(1, 2, 3)); // 3
})();

console.log('\n-------------------------------------------------- 02');
(function() {
  /*
   * Number.prototype.toFixed() 方法，
   * 保留指定的小数位数
   */
  console.log(Math.PI.toFixed(2)); // 3.14
})();
