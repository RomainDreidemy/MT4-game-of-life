import React from 'react';
import Cell from "./Cell/Cell";

interface ILineProps {
	line: number[]
}

const Line = ({ line }: ILineProps) => (
	<div className="line">
		{line.map((cell: number, index: number) => <Cell key={index} cell={cell} />)}
	</div>
)

export default Line;
