import {generateGrid} from "./grid.service";

test('generateDefaultGrid:  default params', () => {
  const grid = generateGrid();

  const expected = 10

  expect(grid.length).toBe(expected);
});

test('generateDefaultGrid: modify params', () => {
  const grid = generateGrid(20, 20);

  const expected = 20;

  expect(grid.length).toBe(expected);
});

test('generateDefaultGrid: Good default schemas', () => {
  const grid = generateGrid();

  const expectedGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  expect(grid).toEqual(expectedGrid);
});
