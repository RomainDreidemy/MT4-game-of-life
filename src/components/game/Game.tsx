import React, {useEffect, useState} from 'react';
import {generateGrid, nextGrid} from "../../services/grid/grid.service";
import {useInterval} from "../../hooks/useInterval.hook";
import {INTERVAL_UPDATE_CELL} from "../../config/grid.config";
import "./Game.css";
import Controls from "./Controls/Controls";
import Grid from "./Grid/Grid";

const Game = () => {
  const [grid, setGrid] = useState<number[][]>(generateGrid());
  const [time, setTime] = useState<number>(INTERVAL_UPDATE_CELL);
  const [live, setLive] = useState<boolean>(false);
  const [historyLaps, setHistoryLaps] = useState<number[][][]>([]);

  useEffect(() => setHistoryLaps([...historyLaps.slice(-9), grid]), [grid]);

  useInterval(() => {
    if(live){
      onNext();
    }
  }, time);

  const toggleLive = () => setLive(!live)

  const onNext = () => {
    setGrid([...nextGrid(grid)]);
  }

  const selectLap = (lap: number[][]) => {
    setGrid([...lap]);
  }

  return (
    <>
      <Grid lines={grid} />

      <Controls
        isLive={live}
        currentInterval={time}
        onChangeLiveStatus={toggleLive}
        onChangeInterval={(interval) => setTime(interval)}
        onNext={onNext}
      />

      <div>
        {historyLaps.map((lap, index) => (
          <div onClick={() => selectLap(lap)}>Return to lap {index}</div>
        )) }
      </div>
    </>
  );
};

export default Game;
