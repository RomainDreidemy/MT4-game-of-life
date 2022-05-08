import React from 'react';
import Line from "./Line/Line";
import {IGridProps} from "../../../interfaces/grid.interface";

const Grid = ({ lines }: IGridProps) => (
	<div className="grid">
		{lines.map((line: number[], index: number) => <Line key={index} line={line} />)}
	</div>
);

export default Grid;
