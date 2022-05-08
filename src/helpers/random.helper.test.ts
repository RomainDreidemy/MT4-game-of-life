import {getRandomInt} from "./random.helper";

test('getRandomInt: default params', () => {
  const randomInt = getRandomInt(10, 5);

  const expected = 50

  expect(randomInt).toBe(expected);
});
