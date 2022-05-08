import {
  generateCellValue,
  isCellOvercrowded,
  isCellUnderpopulated,
  isCellUp,
  isGoodForReproduction
} from "./cell.service";

test('isCellUp: default', () => {
  const cellUpTrue = isCellUp(1);
  const cellUpFalse = isCellUp(0);

  expect(cellUpTrue).toBe(true);
  expect(cellUpFalse).toBe(false);
});

test('isCellUnderpopulated: true', () => {
  const cellUnderpopulated = isCellUnderpopulated(1);

  expect(cellUnderpopulated).toBe(true);
});

test('isCellUnderpopulated: false', () => {
  const cellUnderpopulated = isCellUnderpopulated(3);

  expect(cellUnderpopulated).toBe(false);
});

test('isCellOvercrowded: true', () => {
  const cellOvercrowded = isCellOvercrowded(4);

  expect(cellOvercrowded).toBe(true);
});

test('isCellOvercrowded: false', () => {
  const cellOvercrowded = isCellOvercrowded(3);

  expect(cellOvercrowded).toBe(false);
});

test('isGoodForReproduction: true', () => {
  const goodForReproduction = isGoodForReproduction(3);

  expect(goodForReproduction).toBe(true);
});

test('isGoodForReproduction: false', () => {
  const goodForReproduction = isGoodForReproduction(5);

  expect(goodForReproduction).toBe(false);
});

test('generateCellValue: CellType 0', () => {
  const generatedCellValue = generateCellValue(0.7);

  expect(generatedCellValue).toBe(0);
});

test('generateCellValue: CellType 1', () => {
  const generatedCellValue = generateCellValue(0.8);

  expect(generatedCellValue).toBe(1);
});
