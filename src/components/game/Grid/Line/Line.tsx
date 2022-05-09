import React from 'react';
import Cell from "./Cell/Cell";
import {ILineProps} from "../../../../interfaces/line.interface";

const Line = ({ line }: ILineProps) => (
	<div className="line">
		{line.map((cell: number, index: number) => <Cell key={index} cell={cell} />)}
	</div>
)

export default Line;
