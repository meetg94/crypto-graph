import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title, 
    ToolTip, 
    Filler,
    Legend,
    Tooltip,
    } from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

function CryptoChart({ chartData }) {

    // if (!chartData) {
    //     return (
    //         <div>
    //             <Skeleton />
    //         </div>
    //     )
    // }

    const coinChartData = chartData.map(value => ({ x: value[0], y: value[1].toFixed(2)}))
    const consoleCoinChartData = console.log(coinChartData)

    const options = {
        responsive: true
    }

    const data = {
        labels: coinChartData.map(value => moment(value.x).format("MMM Do YY")),
        datasets: [
            {
                fill: true,
                data: coinChartData.map(val => val.y),
                borderColor: 'rgb(200, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

  return (
    <div>
        <Line option={options} data={data} />
        {consoleCoinChartData}
    </div>
  )
}

export default CryptoChart