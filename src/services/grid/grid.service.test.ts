import {duplicateGrid, generateGrid, nextGrid} from "./grid.service";
import {GripType} from "../../types/grip.type";


test('generateDefaultGrid: throw "nbRows"', async () => {
  try {
    generateGrid(5);

    expect(true).toBe(false);
  } catch (err: any) {
    expect(err.message).toBe('nbRows should be up greater or equal than 50');
  }
});

test('generateDefaultGrid: throw "nbColumns"', async () => {
  try {
    generateGrid(100, 5);

    expect(true).toBe(false);
  } catch (err: any) {
    expect(err.message).toBe('nbColumns should be up greater or equal than 70');
  }
});

test('generateDefaultGrid:  default params', () => {
  const grid = generateGrid();

  const expected = 50

  expect(grid.length).toBe(expected);
});

test('generateDefaultGrid: modify params', () => {
  const grid = generateGrid(100, 100);

  const expected = 100;

  expect(grid.length).toBe(expected);
});

test('generateDefaultGrid: Default schemas', () => {
  const grid = generateGrid(50, 70, () => [0]);

  const expectedGrid = [
    [0], [0], [0], [0], [0], [0],
    [0], [0], [0], [0], [0], [0],
    [0], [0], [0], [0], [0], [0],
    [0], [0], [0], [0], [0], [0],
    [0], [0], [0], [0], [0], [0],
    [0], [0], [0], [0], [0], [0],
    [0], [0], [0], [0], [0], [0],
    [0], [0], [0], [0], [0], [0],
    [0], [0]
  ];

  expect(grid).toEqual(expectedGrid);
});

test('nextGrid: Default schemas', () => {
  const grid = generateGrid(50, 70, () => [1]);
  const newGrid = nextGrid(grid);

  const expectedGrid = [
    [0], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [0]
  ];

  expect(newGrid).toEqual(expectedGrid);
});

test('nextGrid: Default schemas', () => {
  const gridInitial: GripType = [
    [0], [0], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [1], [1], [1], [1], [1],
    [1], [0]
  ];

  const duplicatedGrid = duplicateGrid(gridInitial);

  expect(duplicatedGrid).toEqual(duplicatedGrid);
});
