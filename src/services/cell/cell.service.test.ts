import {isCellUp} from "./cell.service";

test('isCellUp: default', () => {
  const cellUpTrue = isCellUp(1);
  const cellUpFalse = isCellUp(0);

  expect(cellUpTrue).toBe(true);
  expect(cellUpFalse).toBe(false);
});
