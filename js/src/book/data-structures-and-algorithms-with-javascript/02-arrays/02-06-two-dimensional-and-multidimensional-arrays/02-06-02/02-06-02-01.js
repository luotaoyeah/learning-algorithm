/*
 * Arrays
 *     Two-Dimensional and Multidimensional Arrays
 *         Processing Two-Dimensional Array Elements
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 对二维数组进行处理，可以分为两种模式：
   *     1. 将子数组的元素横着排列，外层循环行，内层循环列：
   *        1  2  3
   *        4  5  6
   *        7  8  9
   *     2. 将子数组的元素竖着排列，外层循环列，内层循环行：
   *        1  4  7
   *        2  5  8
   *        3  6  9
   */

  Array.prototype.toMatrix = function() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      var row = this[i];
      for (var j = 0; j < row.length; j++) {
        str += row[j];
        if (j < row.length - 1) {
          str += "  ";
        }
      }
      str += "\n";
    }
    console.log(str);
  };

  Array.prototype.toVerticalMatrix = function() {
    var str = "";
    for (var j = 0; j < this.length; j++) {
      for (var i = 0; i < this.length; i++) {
        str += this[i][j];
        if (i < this.length - 1) {
          str += "  ";
        }
      }
      str += "\n";
    }
    console.log(str);
  };

  var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  // 1  2  3
  // 4  5  6
  // 7  8  9
  arr.toMatrix();

  // 1  4  7
  // 2  5  8
  // 3  6  9
  arr.toVerticalMatrix();
})();
