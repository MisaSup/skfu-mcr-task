export const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

export const fibonacci = (index) => {
    if (index < 0) return -1;
    if (index === 0) return 0;
    if (index === 1) return 1;
    return fibonacci(index - 1) + fibonacci(index - 2);
};

export const isFalsy = (value) => {
    return !value;
};

export const palindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
};

export const keepRepeated = (str) => {
    const counts = new Map();
    for (const char of str) {
        const lower = char.toLowerCase();
        counts.set(lower, (counts.get(lower) || 0) + 1);
    }
    return str
        .split("")
        .filter((char) => counts.get(char.toLowerCase()) > 1)
        .join("");
};

export const uniqueChars = (str) => {
    const seen = new Set();
    let result = "";
    for (const char of str) {
        const lower = char.toLowerCase();
        if (!seen.has(lower)) {
            seen.add(lower);
            result += char;
        }
    }
    return result;
};
