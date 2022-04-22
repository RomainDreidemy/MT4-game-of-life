import React, {useEffect, useRef, useState} from 'react';
import {generateGrid, nextGrid} from "../../services/grid/grid.service";
import {useInterval} from "../../hooks/useInterval.hook";
import {GRID_CELL_UP_VALUE, INTERVAL_UPDATE_CELL} from "../../config/grid.config";
import "./Game.css";

const Game = (): React.ReactComponentElement<any> => {
  const [grid, setGrid] = useState<number[][]>(generateGrid());
  const [time, setTime] = useState(INTERVAL_UPDATE_CELL);
  const [live, setLive] = useState(false);
  
  const handleChange = (event: any) => {
    setTime(event.target.value)
  }

  useInterval(() => {
    if(live != false){
      setGrid([...nextGrid(grid)]);
    }
  }, time);

  return (
    <div>
      <div className="grid">
        {grid.map((line: number[], lineIndex: number) => (
          <div key={lineIndex} className="line">
            {line.map((cell: number, cellIndex: number) => <div key={cellIndex} className={`cell ${cell === GRID_CELL_UP_VALUE && 'cell--up'}`}></div>)}
          </div>
        ))}
      </div>
      <div className='wrapper-contols'>
        <button onClick={() => {setLive(!live)}}>
            {live ? "Stop" : "Start"}
        </button>
        <div className='wrapper-contols-interval'>
          <label>Speed Interval<span>(millisecond)</span>: </label>
          <input type="number" min="0" step="1000" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Game;
