import StateSummary from './StateSummary';

const StateWiseGrid = ({ states, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {states.map((state, index) => (
        <StateSummary key={index} state={state} onClick={() => onClick(state)} />
      ))}
    </div>
  );
};

export default StateWiseGrid;
