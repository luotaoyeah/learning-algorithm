/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Variable Scope
 *             no block scope
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * js 中没有块级作用域（block scope）
   */

  for (var i = 0; i < 10; i++) {}
  console.log(i); // 10
})();
