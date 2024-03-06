import { 
  Chart as ChartJS,
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title,
  Tooltip, 
  Legend 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend);

export const LineGraph = ({data}) =>{
  const labels = data.map(item => {
    const date = new Date(item.weekEnding);
    return date.toLocaleString('default', { month: 'short' });
  });
  const retailSalesData = data.map(item => item.retailSales);
  const wholesaleSalesData = data.map(item => item.wholesaleSales);

  const graphData = {
    labels,
    datasets: [
      {
        label: 'Retail Sales',
        data: retailSalesData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Wholesale Sales',
        data: wholesaleSalesData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ]
  }

  return (
    <div>
      {/* <Line data={graphData}/> */}
    </div>
  )
}
