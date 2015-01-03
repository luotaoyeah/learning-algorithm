/*
 * Arrays
 *     Arrays of Objects
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * array 的元素可以是 object
   */

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")";
  };

  var arr01 = [new Point(1, 1), new Point(2, 2), new Point(3, 3)];
  arr01.push(new Point(4, 4));
  arr01.shift();

  // (2, 2)
  // (3, 3)
  // (4, 4)
  arr01.forEach(function(value) {
    console.log(value.toString());
  });
})();
