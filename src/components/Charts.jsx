import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Temperature',
        data: data,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Past Weather Data</h2>
      <div className="bg-white rounded-md shadow-md p-4">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default Chart;
