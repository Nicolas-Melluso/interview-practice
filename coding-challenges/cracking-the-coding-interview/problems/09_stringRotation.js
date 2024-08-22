"use strict";
// 9. *String Rotation*;
Object.defineProperty(exports, "__esModule", { value: true });
// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, si and s2, write code to check if s2 is a rotation of 1i using only one call to isSubstring
// [e.g., "waterbottle" is a rotation oP'erbottlewat")
function isSubstring(s1, s2) {
    return s1.includes(s2);
}
function stringRotation(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    var concatenated = s1 + s1;
    return isSubstring(concatenated, s2);
}
exports.default = stringRotation;
