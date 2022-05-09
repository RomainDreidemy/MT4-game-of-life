import React, {useState} from 'react';
import {generateGrid, nextGrid} from "../../services/grid/grid.service";
import {useInterval} from "../../hooks/useInterval.hook";
import {INTERVAL_UPDATE_CELL} from "../../config/grid.config";
import "./Game.css";
import Controls from "./Controls/Controls";
import Grid from "./Grid/Grid";
import {GripType} from "../../types/grip.type";

const Game = () => {
  const [grid, setGrid] = useState<GripType>(generateGrid());
  const [time, setTime] = useState<number>(INTERVAL_UPDATE_CELL);
  const [live, setLive] = useState<boolean>(false);

  const nextStep = () => {
    if(live){
      onNext();
    }
  }

  useInterval(nextStep, time);

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
