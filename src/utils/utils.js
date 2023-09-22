export const convertToF = value => {
  return value * 1.8 + 32;
};

export const getTemp = (temp, format) => {
  if (format === 0) {
    return Math.ceil(temp);
  }
  return Math.ceil(convertToF(temp));
};
