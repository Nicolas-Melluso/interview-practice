"use strict";
// 2. *Check Permutation*:
Object.defineProperty(exports, "__esModule", { value: true });
// Given two strings, write a method to decide if one is a permutation of the other. 
// [LeetCode](https://leetcode.com/problems/permutation-in-string/)
function checkPermutations(s1, s2) {
    function generatePermutations(str, prefix) {
        if (prefix === void 0) { prefix = ""; }
        if (str.length === 0) {
            return [prefix];
        }
        else {
            var permutations_1 = [];
            for (var i = 0; i < str.length; i++) {
                var strAux = str.substring(0, i) + str.substring(i + 1);
                permutations_1 = permutations_1.concat(generatePermutations(strAux, prefix + str[i]));
            }
            return permutations_1;
        }
    }
    var permutations = generatePermutations(s1);
    for (var i = 0; i <= s2.length - s1.length; i++) {
        var subStr = s2.substring(i, i + s1.length);
        if (permutations.includes(subStr)) {
            return true;
        }
    }
    return false;
}
exports.default = checkPermutations;
checkPermutations("abc", "caba");
