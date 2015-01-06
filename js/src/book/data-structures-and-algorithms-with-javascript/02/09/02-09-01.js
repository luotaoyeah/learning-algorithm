/*
 * Arrays
 *     Exercises
 */

/*
 * Create a grades object that stores a set of student grades in an object.
 * Provide a function for adding a grade and a function for displaying the student’s grade average.
 */
console.log('\n-------------------------------------------------- 01');
(function() {
  function Grades() {
    this.datas = [];
    this.add = function(item) {
      this.datas.push(item);
    };
    this.avg = function() {
      return (
        this.datas.reduce(function(prevValue, currValue) {
          return prevValue + currValue;
        }) / this.datas.length
      ).toFixed(2);
    };
  }

  var grades = new Grades();
  grades.add(99);
  grades.add(97);
  grades.add(98.5);

  console.log(grades.avg()); // 98.17
})();
