/*
 * Arrays
 *     Exercises
 */

/*
 * Store a set of words in an array and display the contents both forward and backward.
 */
console.log("\n-------------------------------------------------- 01");
(function() {
  var words = ["data", "structures", "and", "algorithms", "with", "javascript"];
  console.log(words.join(" "));
  console.log(words.reverse().join(" "));
  console.log(
    words
      .map(i =>
        i
          .split("")
          .reverse()
          .join("")
      )
      .join(" ")
  );
})();
