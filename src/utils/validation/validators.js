const required = (value) => (value ? undefined : "HET HAX");

const maxLenghtCreator = (maxLenght) => (value) =>
  value.lenght > maxLenght ? `Max lenght is ${maxLenght} symbols` : undefined;

export { required, maxLenghtCreator };
