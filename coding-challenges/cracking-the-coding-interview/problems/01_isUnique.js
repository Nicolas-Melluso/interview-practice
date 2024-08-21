"use strict";
// 1. *Is Unique*:
Object.defineProperty(exports, "__esModule", { value: true });
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?
function isUnique(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
exports.default = isUnique;
