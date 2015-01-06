/*
 * Arrays
 *     Two-Dimensional and Multidimensional Arrays
 *         Jagged Arrays
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * 当各个内层数组的元素个数不一样时，
   * 该二维数组称之为锯齿状的二维数组
   */

  var arr = [[1], [2, 3], [4, 5, 6]];

  Array.prototype.toMatrix = function() {
    var str = '';
    for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < this[i].length; j++) {
        str += this[i][j];
        if (j < this[i].length - 1) {
          str += '\t';
        }
      }
      str += '\n';
    }
    console.log(str);
  };

  // 1
  // 4	9
  // 16	25	36
  arr
    .map(function(value) {
      return value.map(function(value) {
        return value * value;
      });
    })
    .toMatrix();
})();
