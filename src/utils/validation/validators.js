const required= value => {
    if (value) return undefined;
    return "HET HAX";
}

const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.lenght > maxLenght) return `Max lenght is ${maxLenght} symbols`;
    return undefined;
}

export {required, maxLenghtCreator};