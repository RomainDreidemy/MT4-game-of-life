import React from 'react';
import Line from "./Line/Line";
import {IGridProps} from "../../../interfaces/grid.interface";
import {CellType} from "../../../types/cell.type";

const Grid = ({ lines }: IGridProps) => (
	<div className="grid">
		{lines.map((line: CellType[], index: number) => <Line key={index} line={line} />)}
	</div>
);

export default Grid;
