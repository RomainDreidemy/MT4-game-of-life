import React from 'react';
import {render} from '@testing-library/react';
import Grid from "./Grid";


test('Grid', () => {
  render(<Grid lines={[[0], [0]]}/>);
});
