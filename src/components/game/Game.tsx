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
      setGrid([...nextGrid(grid)]);
    }
  }, time);

  const toggleLive = () => setLive(!live)

  return (
    <>
      <Grid lines={grid} />

      <Controls
        isLive={live}
        currentInterval={time}
        onChangeLiveStatus={toggleLive}
        onChangeInterval={(interval) => setTime(interval)}
      />
    </>
  );
};

export default Game;
