import {generateGrid, nextGrid} from "./grid.service";


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

// test('generateDefaultGrid: Good default schemas', () => {
//   const grid = generateGrid(50, 70, [0]);
//
//   console.log(JSON.stringify(grid))
//   console.log(
//     '==================='
//   )
//
//
//
//   const expectedGrid = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   ];
//
//   expect(grid).toEqual(expectedGrid);
// });

// test('nextGrid', () => {
//   const grid = generateGrid();
//   const newGrid = nextGrid(grid);
//
//   const expectedGrid = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   ];
//
//   expect(newGrid).toEqual(expectedGrid);
// });
