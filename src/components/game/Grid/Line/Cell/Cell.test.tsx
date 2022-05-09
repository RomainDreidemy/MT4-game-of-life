import React from 'react';
import {GRID_CELL_UP_VALUE} from "../../../../../config/grid.config";
import {ICellProps} from "../../../../../interfaces/cell.interface";
import { render, screen } from '@testing-library/react';
import Cell from './Cell';


test('Cell', () => {
  const { container } = render(<Cell cell={0}/>);

  expect(container.getElementsByClassName('cell').length).toBe(1);
});


test('Cell cell--up', () => {
  const { container } = render(<Cell cell={1}/>);

  expect(container.getElementsByClassName('cell').length).toBe(1);
  expect(container.getElementsByClassName('cell--up').length).toBe(1);
});
