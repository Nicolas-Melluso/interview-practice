"use strict";
// 6. *String Compression*:
Object.defineProperty(exports, "__esModule", { value: true });
// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).
function stringCompression(str) {
    var newStr = [];
    var counter = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
        }
        else {
            newStr.push(str[i] + counter);
            counter = 1;
        }
    }
    var strFormatted = newStr.join('');
    return strFormatted.length < str.length ? strFormatted : str;
}
exports.default = stringCompression;
