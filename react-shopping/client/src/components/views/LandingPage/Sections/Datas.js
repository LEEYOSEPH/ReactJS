const continents = [
  {
    _id: 1,
    name: 'Arfica',
  },
  {
    _id: 2,
    name: 'Europe',
  },
  {
    _id: 3,
    name: 'Asia',
  },
  {
    _id: 4,
    name: 'North America',
  },
  {
    _id: 5,
    name: 'South America',
  },
  {
    _id: 6,
    name: 'Australia',
  },
  {
    _id: 7,
    name: 'Antarctica',
  },
];
const price = [
  {
    _id: 0,
    name: 'Any',
    array: [],
  },
  {
    _id: 1,
    name: '$0 ~ $199',
    array: [0, 199],
  },
  {
    _id: 2,
    name: '$200 ~ $299',
    array: [200, 299],
  },
  {
    _id: 3,
    name: '$300 ~ $399',
    array: [300, 399],
  },
  {
    _id: 4,
    name: '$400 ~ $499',
    array: [400, 499],
  },
  {
    _id: 5,
    name: 'More than $500',
    array: [500, 300000],
  },
];

export { continents, price };
