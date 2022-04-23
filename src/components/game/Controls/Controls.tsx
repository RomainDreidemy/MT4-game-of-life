import React from 'react';
import Button from "./Button/Button";
import Interval from "./Interval/Interval";

interface IControlsProps {
  isLive: boolean
  onChangeLiveStatus: () => void
  onChangeInterval: (interval: number) => void
}

const Controls = ({ isLive, onChangeInterval, onChangeLiveStatus }: IControlsProps) => (
  <div className='wrapper-controls'>
    <Button
      text={isLive ? "Stop" : "Start"}
      onClick={onChangeLiveStatus}
    />

    <Interval onChange={(interval) => onChangeInterval(interval)} />
  </div>
);

export default Controls;
