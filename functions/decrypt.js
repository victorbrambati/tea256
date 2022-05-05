const bruteforce = require("bruteforcejs");
var sha256 = require("js-sha256").sha256;

export default function decrypt(input, mySha256) {
  // how many times the "[?]" appear on the string input
  var questionsMarkInInput = input.match(/\[\?\]/g) || [];
  var correctAnswer = "";
  var newInput = "";
  bruteforce(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz0123456789./",
    (result) => {
      var mySplitResult = result.split("");

      if (mySplitResult.length == questionsMarkInInput.length) {
        for (var i = 0; i < mySplitResult.length; i++) {
          if (i == 0) {
            newInput = input.replace("[?]", mySplitResult[i]);
          } else {
            newInput = newInput.replace("[?]", mySplitResult[i]);
          }
        }

        var log = `${newInput}`;

        if (sha256(log) == mySha256) {
          correctAnswer = `${log}`;
          return true;
        }
      }
    },
    questionsMarkInInput.length
  );
  return correctAnswer;
}
