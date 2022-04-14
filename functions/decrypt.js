const bruteforce = require("bruteforcejs");
var sha256 = require("js-sha256").sha256;
// get response api from url if response code is 304 then return true else if 302 then return false

function decrypt(input) {
  // how many times the "[?]" appear on the string input
  var count = (input.match(/\[\?\]/g) || []).length;

  for (var i = 0; i < count; i++) {
    // replace the "[?]" with "?"
    var newInput = input.replace("[?]", "${mySplitResult[i]}");
  }

  bruteforce(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz0123456789",
    (result) => {
      var mySplitResult = result.split("");
      var decrypt = `${newInput}`;
      console.log(decrypt);

      if (
        sha256(decrypt) ==
        "76949a35477f8b8f5e35c50d3006c01dbc4515bb744d88f0b636bc5f2fc20756"
      ) {
        return true;
      }
    },
    count
  );
  return `${decrypt} is the correct answer`;
}
