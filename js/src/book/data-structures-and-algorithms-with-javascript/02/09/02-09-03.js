/*
 * Arrays
 *     Exercises
 */

/*
 * Create an object that stores individual letters in an array and has a function for
 * displaying the letters as a single word.
 */
console.log('\n-------------------------------------------------- 01');
(function() {
  function Obj() {
    this.datas = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
    this.display = function() {
      console.log(this.datas.join(''));
    };
  }

  new Obj().display(); // javascript
})();
