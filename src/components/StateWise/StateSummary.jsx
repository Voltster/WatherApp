import { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';

const StateSummary = ({ state, onClick }) => {
  const { name, temp, population } = state;

  // color scale for temp
  const colorScale = scaleLinear()
    .domain([21, 35]) 
    .range(['blue', 'red'])
    .interpolate(interpolateRgb);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-4 m-2 flex relative  rounded-sm"
      style={{ backgroundColor: colorScale(temp), cursor: 'pointer', gridColumnEnd: 'span 1' }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(state)}
    >
      {name}
      {isHovered && (
        <div className="absolute top-1 right-2">
          <p>Temperature: {temp}°C</p>
          <p>Population: {population}</p>
        </div>
      )}
    </div>
  );
};

export default StateSummary;
