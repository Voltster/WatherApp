
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);
const Diagram = ({ state }) => {
 

  return (
    <div className="w-64 p-4 bg-white rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{state.name}</h2>
      <p>Temperature: {state.temp}°C</p>
      <p>Population: {state.population}</p>
      <Bar
        data={{
          labels: ["Population"],
          datasets: [
            {
              label: state.name,
              data: [state.population],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default Diagram;
