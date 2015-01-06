/*
 * The JavaScript Programming Environment and Model
 *     JavaScript Programming Practices
 *         Decision Constructs
 */

console.log('\n-------------------------------------------------- 01');
(function() {
  /*
   * if...else if...else
   */

  var low = 1;
  var mid = 25;
  var high = 50;
  var current = 13;
  var found = -1;

  if (current < mid) {
    mid = (current - low) / 2;
  } else if (current > mid) {
    mid = (current + high) / 2;
  } else {
    found = current;
  }
})();

console.log('\n-------------------------------------------------- 02');
(function() {
  /*
   * switch
   * js 中的 switch 语句的条件表达式可以是任意类型
   */

  var month = '12';
  var monthStr = '';

  switch (month) {
    case '1':
      monthStr = 'January';
      break;
    case '2':
      monthStr = 'February';
      break;
    case '3':
      monthStr = 'March';
      break;
    case '4':
      monthStr = 'April';
      break;
    case '5':
      monthStr = 'May';
      break;
    case '6':
      monthStr = 'June';
      break;
    case '7':
      monthStr = 'July';
      break;
    case '8':
      monthStr = 'August';
      break;
    case '9':
      monthStr = 'September';
      break;
    case '10':
      monthStr = 'October';
      break;
    case '11':
      monthStr = 'Noverber';
      break;
    case '12':
      monthStr = 'December';
      break;
    default:
      throw new Error('WRONG MOHTH NUMBER');
  }
})();
