// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other. 
// [LeetCode](https://leetcode.com/problems/permutation-in-string/)

export default function checkPermutations (s1 : string, s2: string): boolean {
    function generatePermutations(str: string, prefix: string = ""): string[] {
        if (str.length === 0) {
            return [prefix];
        } else {
            let permutations: string[] = [];
            for (let i = 0; i < str.length; i++) {
                const strAux = str.substring(0, i) + str.substring(i + 1);
                permutations = permutations.concat(generatePermutations(strAux, prefix + str[i]));
            }
            return permutations;
        }
    }

    const permutations = generatePermutations(s1);
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        const subStr = s2.substring(i, i + s1.length);
        if (permutations.includes(subStr)) {
            return true;
        }
    }

    return false;
}

checkPermutations("abc", "caba");