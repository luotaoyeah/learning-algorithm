/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Variable Scope
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * variable 有两种作用于：global scope 和 function scope
   * 在 function 之外声明的变量属于 global scope
   * 在 function 内部声明的变量属于 function scope
   */

  function showScope() {
    return scope;
  }

  function showScope02() {
    var scope = 'local';
    return scope;
  }

  var scope = 'global';

  console.log(scope); // global
  console.log(showScope()); // global
  console.log(showScope02()); // local
})();
