export const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  if (randomNum === exclude) return generateRandomBetween(min, max, exclude);
  else return randomNum;
};
