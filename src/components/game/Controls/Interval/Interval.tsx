import React from 'react';
import {IIntervalProps} from "../../../../interfaces/interval.interface";


const Interval = ({currentInterval, onChange}: IIntervalProps) => (
  <div className='wrapper-controls-interval'>
    <label>Speed Interval<span>(millisecond)</span>: </label>
    <input
      type="number"
      min="0"
      step="100"
      onChange={(e) => onChange(e.target.valueAsNumber)}
      defaultValue={currentInterval}
    />
  </div>
);

export default Interval;
