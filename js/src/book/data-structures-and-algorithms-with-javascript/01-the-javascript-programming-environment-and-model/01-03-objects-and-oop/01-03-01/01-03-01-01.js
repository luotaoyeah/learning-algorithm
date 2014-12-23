/*
 * The JavaScript Programming Environment and Model
 *     Objects and Object-Oriented Programming
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  /*
   * 通过 constructor function 构造对象
   */

  function Checking(amount) {
    this.balance = amount;
    this.deposit = function(amount) {
      this.balance += amount;
    };
    this.withdraw = function(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.error("余额不足");
      }
    };
    this.toString = function() {
      return "余额：￥" + this.balance;
    };
  }

  var account = new Checking(500);

  account.deposit(1000);
  console.log(account.toString()); // 余额：￥1500

  account.withdraw(750);
  console.log(account.toString()); // 余额：￥750

  account.withdraw(800); // 余额不足

  console.log(account.toString()); // 余额：￥750
})();
