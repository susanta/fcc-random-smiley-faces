import React from 'react';
import { arc } from 'd3';

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

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

const BackgroundCircle = ({ radius }) => (
  <circle r={radius} fill='yellow' stroke='black' strokeWidth={strokeWidth} />
);

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <BackgroundCircle radius={centerY - strokeWidth / 2} />
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRedious} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRedious} />
      <path d={mouthArc()} />
    </g>
  </svg>
);

export default App;
