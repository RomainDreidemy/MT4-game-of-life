import React from 'react';
import Line from "./Line/Line";

interface  IGridProps {
	lines: number[][]
}

const Grid = ({ lines }: IGridProps) => (
	<div className="grid">
		{lines.map((line: number[], index: number) => <Line key={index} line={line} />)}
	</div>
);

export default Grid;
