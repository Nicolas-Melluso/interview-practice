"use strict";
// 3.  URLify:
Object.defineProperty(exports, "__esModule", { value: true });
// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.
function URLify(s1) {
    return s1.split(' ').join('%20');
}
exports.default = URLify;
