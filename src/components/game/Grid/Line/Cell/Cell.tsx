import React from 'react';
import {GRID_CELL_UP_VALUE} from "../../../../../config/grid.config";
import {ICellProps} from "../../../../../interfaces/cell.interface";


const Cell = ({cell}: ICellProps) => <div
  className={`cell ${cell === GRID_CELL_UP_VALUE && 'cell--up'}`}
/>;

export default Cell;
