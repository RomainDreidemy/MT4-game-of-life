import React, {useState} from 'react';
import {generateGrid, nextGrid} from "../../services/grid/grid.service";
import {useInterval} from "../../hooks/useInterval.hook";
import {GRID_CELL_UP_VALUE, INTERVAL_UPDATE_CELL} from "../../config/grid.config";
import "./Game.css";
import Controls from "./Controls/Controls";

const Game = (): React.ReactComponentElement<any> => {
  const [grid, setGrid] = useState<number[][]>(generateGrid());
  const [time, setTime] = useState<number>(INTERVAL_UPDATE_CELL);
  const [live, setLive] = useState<boolean>(false);

  useInterval(() => {
    if(live){
      setGrid([...nextGrid(grid)]);
    }
  }, time);

  const toggleLive = () => setLive(!live)

  return (
    <div>
      <div className="grid">
        {grid.map((line: number[], lineIndex: number) => (
          <div key={lineIndex} className="line">
            {line.map((cell: number, cellIndex: number) => <div key={cellIndex} className={`cell ${cell === GRID_CELL_UP_VALUE && 'cell--up'}`}></div>)}
          </div>
        ))}
      </div>

      <Controls
        isLive={live}
        onChangeLiveStatus={toggleLive}
        onChangeInterval={(interval) => setTime(interval)}
      />
    </div>
  );
};

export default Game;
