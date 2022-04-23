import React from 'react';

interface IIntervalProps {
  onChange: (interval: number) => void
}

const Interval = ({ onChange }: IIntervalProps) => (
  <div className='wrapper-controls-interval'>
    <label>Speed Interval<span>(millisecond)</span>: </label>
    <input
      type="number"
      min="0"
      step="1000" onChange={(e) =>
      onChange(e.target.valueAsNumber)}
    />
  </div>
);

export default Interval;
