import React from 'react';

import { BackgroundCircle } from './components/BackgroundCircle';
import { Eyes } from './components/Eyes';
import { Mouth } from './components/Mouth';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 90;
const eyeRedious = 40;
const mouthWidth = 20;
const mouthRadius = 110;

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRedious={eyeRedious}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </g>
  </svg>
);

export default App;
