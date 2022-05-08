import React from 'react';
import {render} from '@testing-library/react';
import Line from "./Line";


test('Line', () => {
  render(<Line line={[0, 0]}/>);
});
