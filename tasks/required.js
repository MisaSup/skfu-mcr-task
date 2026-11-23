export const helloWorld = () => {
    const str = "Hello, World!";
    console.log(str);
    return str;
};

export const getString = (str) => {
    return str;
};

export const getLength = (arr) => {
    return arr.length;
};

export const getFirst = (arr) => {
    return arr[0];
};

export const getLast = (arr) => {
    return arr[arr.length - 1];
};

export const pushElement = (arr, elem) => {
    arr.push(elem);
    return arr;
};

export const popElement = (arr) => {
    return arr.pop();
};

export const getAnimalDescription = ({ animal, legs, color }) => {
    return `The ${color} ${animal} has ${legs} legs`;
};

export const getObjKeys = (obj) => {
    return Object.keys(obj);
};

export const getObjValues = (obj) => {
    return Object.values(obj);
};

export const patchObj = (obj, updates) => {
    return { ...obj, ...updates };
};

export const deleteItem = (arr, item) => {
    return arr.filter((el) => el !== item);
};

export const multiplyByTwo = (arr) => {
    return arr.map((num) => num * 2);
};

export const getAssessments = (arr) => {
    const res = { 5: 0, 4: 0, 3: 0, 2: 0 };
    for (const score of arr) {
        if (score === 10) res[5]++;
        else if (score >= 8) res[4]++;
        else if (score >= 5) res[3]++;
        else res[2]++;
    }
    return res;
};

export const hasBoolean = (arr) => {
    return arr.some((el) => typeof el === "boolean");
};

export const isStringArray = (arr) => {
    if (arr.length === 0) return false;
    return arr.every((el) => typeof el === "string");
};

export const return2007 = (str) => {
    return (
        str
            .split("")
            .reduce((acc, char, index) => {
                let current = char;
                if (current === "В" || current === "в") {
                    current = "ф";
                }
                acc.push(index % 2 === 0 ? current.toUpperCase() : current.toLowerCase());
                return acc;
            }, [])
            .join("") + ":*"
    );
};
