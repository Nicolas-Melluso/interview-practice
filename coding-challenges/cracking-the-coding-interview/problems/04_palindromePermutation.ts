// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
    str = str.replace(/ /g, '').toLowerCase();
    

    if (str.length === 1) {
        return true;
    }

    const counts = new Map<string, number>();

    for (let i = 0; i < str.length; i++) {
        const strAux = str[i];
        counts.set(strAux, (counts.get(strAux) || 0) + 1);
    }

    const keys = Array.from(counts.keys());

    let oddCount = 0;

    for (let i = 0; i < keys.length; i++) {
        const count = counts.get(keys[i]) || 0;
        if (count % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1) return false
    }

    return true;
}
