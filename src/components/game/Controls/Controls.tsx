import React from 'react';
import Button from "./Button/Button";
import Interval from "./Interval/Interval";

interface IControlsProps {
  isLive: boolean
	currentInterval: number
  onChangeLiveStatus: () => void
  onChangeInterval: (interval: number) => void
	onNext: () => void
}

const Controls = ({ isLive, currentInterval, onChangeInterval, onChangeLiveStatus, onNext }: IControlsProps) => (
  <div className='wrapper-controls'>
      <Button
          text={isLive ? "Stop" : "Start"}
          onClick={onChangeLiveStatus}
      />

      <Button
          text="Next"
					isDisabled={isLive}
          onClick={onNext}
      />

    <Interval
      currentInterval={currentInterval}
      onChange={(interval) => onChangeInterval(interval)}
    />
  </div>
);

export default Controls;
