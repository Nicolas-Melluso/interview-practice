"use strict";
// 4. *Palindrome Permutation*: 
Object.defineProperty(exports, "__esModule", { value: true });
// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```
function palindromePermutation(str) {
    str = str.replace(/ /g, '').toLowerCase();
    if (str.length === 1) {
        return true;
    }
    var counts = new Map();
    for (var i = 0; i < str.length; i++) {
        var strAux = str[i];
        counts.set(strAux, (counts.get(strAux) || 0) + 1);
    }
    var keys = Array.from(counts.keys());
    var oddCount = 0;
    for (var i = 0; i < keys.length; i++) {
        var count = counts.get(keys[i]) || 0;
        if (count % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1)
            return false;
    }
    return true;
}
exports.default = palindromePermutation;
