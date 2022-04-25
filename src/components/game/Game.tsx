import React, {useState} from 'react';
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

  useInterval(() => {
    if(live){
      onNext();
    }
  }, time);

  const toggleLive = () => setLive(!live)

  const onNext = () => {
    setGrid([...nextGrid(grid)]);
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
    </>
  );
};

export default Game;
