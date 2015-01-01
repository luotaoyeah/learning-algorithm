/*
 * Arrays
 *     Two-Dimensional and Multidimensional Arrays
 *         Creating Two-Dimensional Arrays
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * JS 中的二维数组，就是数组的数组，
   * 即一个数组的元素也是一个数组，类似于一个行列表格
   */

  Array.prototype.toMatrix = function() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      var row = this[i];
      for (var j = 0; j < row.length; j++) {
        str += row[j];
        if (j < row.length - 1) {
          str += "\t";
        }
      }
      str += "\n";
    }

    console.log(str);
  };

  var arr = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
  // 1
  // 2  3
  // 4  5  6
  // 7  8  9  10
  arr.toMatrix();
})();
