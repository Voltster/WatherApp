import React, { useState } from 'react';
import StateSummary from '../components/StateWise/StateSummary';
import StateWiseGrid from '../components/StateWise/StateWiseGrid';
import Diagram from '../components/StateWise/Diagram';

const states = [
  { name: 'Maharashtra', temp: 28, population: 112374333, color: '#4C51BF' },
  { name: 'Uttar Pradesh', temp: 26, population: 199812341, color: '#4CAF50' },
  { name: 'Bihar', temp: 25, population: 104099452, color: '#FF9800' },
  { name: 'West Bengal', temp: 27, population: 91276115, color: '#F44336' },
  { name: 'Madhya Pradesh', temp: 24, population: 72626809, color: '#9C27B0' },
  { name: 'Tamil Nadu', temp: 30, population: 72147030, color: '#00BCD4' },
  { name: 'Rajasthan', temp: 26, population: 68548437, color: '#8BC34A' },
  { name: 'Karnataka', temp: 28, population: 61095297, color: '#FFEB3B' },
  { name: 'Gujarat', temp: 29, population: 60439692, color: '#795548' },
  { name: 'Andhra Pradesh', temp: 31, population: 49577103, color: '#E91E63' },
  { name: 'Odisha', temp: 28, population: 41974218, color: '#FF5722' },
  { name: 'Telangana', temp: 29, population: 35003674, color: '#607D8B' },
];

function StateWise() {
  const [selectedStateData, setSelectedStateData] = useState(null);

  const handleStateSelect = (state) => {
    setSelectedStateData(state);
    console.log(state)
  };

  

  return (
    <div className="flex flex-col h-screen" id='stateWise'>
      <StateWiseGrid states={states} onClick={handleStateSelect} />
      {selectedStateData && <Diagram state={selectedStateData} />}
    </div>
  );
}

export default StateWise;
