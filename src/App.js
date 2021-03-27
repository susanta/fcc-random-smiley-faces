import React from 'react';
import ReactDOM from 'react-dom';
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

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <circle
        r={centerY - strokeWidth / 2}
        fill='yellow'
        stroke='black'
        strokeWidth={strokeWidth}
      />
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRedious} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRedious} />
      <path d={mouthArc()} />
    </g>
  </svg>
);

export default App;
