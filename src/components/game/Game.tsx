import React, {useEffect, useRef, useState} from 'react';
import {generateGrid, nextGrid} from "../../services/grid/grid.service";
import {useInterval} from "../../hooks/useInterval.hook";
import {GRID_CELL_UP_VALUE, INTERVAL_UPDATE_CELL} from "../../config/grid.config";

const Game = (): React.ReactComponentElement<any> => {
  const [grid, setGrid] = useState<number[][]>(generateGrid());

  useInterval(() => {
    setGrid([...nextGrid(grid)]);
  }, INTERVAL_UPDATE_CELL);

  return (
    <div className="grid">
      {grid.map((line: number[], lineIndex: number) => (
        <div key={lineIndex} className="line">
          {line.map((cell: number, cellIndex: number) => <div key={cellIndex} className={`cell ${cell === GRID_CELL_UP_VALUE && 'cell--up'}`}></div>)}
        </div>
      ))}
    </div>
  );
};

export default Game;
