import {generateLine} from "./line.service";


test('generateLine: true', () => {
  const generatedLineTrue = generateLine(5, () => 1);

  expect(generatedLineTrue).toStrictEqual([1, 1, 1, 1, 1]);
});

test('generateLine: false', () => {
  const generatedLineFalse = generateLine(5, () => 0);
  
  expect(generatedLineFalse).toStrictEqual([0, 0, 0, 0, 0]);
});
