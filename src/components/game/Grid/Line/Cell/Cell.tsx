import React from 'react';
import {GRID_CELL_UP_VALUE} from "../../../../../config/grid.config";

interface ICellProps {
	cell: number
}

const Cell = ({ cell }: ICellProps) => <div
	className={`cell ${cell === GRID_CELL_UP_VALUE && 'cell--up'}`}
/>;

export default Cell;
