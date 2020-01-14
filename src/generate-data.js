import faker from 'faker';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateData = (count = 1000) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      randomHeight: getRandomIntInclusive(50, 150)
    });
  }
  return data;
};
export default generateData;