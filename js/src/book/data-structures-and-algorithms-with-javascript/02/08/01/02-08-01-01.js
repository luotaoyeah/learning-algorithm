/*
 * Arrays
 *     Arrays in Objects
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * object 的属性可以是一个 array
   */

  function TemperatureCalculator() {
    this.datas = [];
    this.add = function(temp) {
      this.datas.push(temp);
    };
    this.avg = function() {
      return (
        this.datas.reduce(function(prevValue, curValue) {
          return prevValue + curValue;
        }, 0) / this.datas.length
      );
    };
  }

  var calculator = new TemperatureCalculator();
  calculator.add(3);
  calculator.add(6);
  calculator.add(9);
  console.log(calculator.avg()); // 6
})();
