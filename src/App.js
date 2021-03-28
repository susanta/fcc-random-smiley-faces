import React from 'react';
import { range } from 'd3';
import { Face } from './components/Face';

const width = 160;
const height = 160;

const array = range(5 * 6);

const App = () =>
  array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={5 + Math.random() * 5}
      eyeOffsetX={20 + Math.random() * 5}
      eyeOffsetY={20 + Math.random() * 7}
      eyeRedious={5 + Math.random() * 10}
      mouthWidth={10 + Math.random() * 10}
      mouthRadius={30 + Math.random() * 10}
    />
  ));

export default App;
