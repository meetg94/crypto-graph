import { useState, useEffect } from 'react'

import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title, 
    Filler,
    Legend,
    Tooltip,
    } from 'chart.js'
import axios from 'axios'
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

function CryptoChart() {

    const { id } = useParams()

    const [coinData, setCoinData] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
                setCoinData(data.prices)
            } catch(err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    if (!coinData) {
        return (
            <div>
                <Skeleton />
            </div>
        )
    }
    
    const coinChartData = coinData.map(value => ({ x: value[0], y: value[1].toFixed(2) }))

    //const consoleCoinData = console.log(coinData.prices)
    const consoleChartData = console.log(coinChartData)

    const options = {
        responsive: true
    }

    const data = {
        labels: coinChartData.map(value => moment(value.x).format("MMM DD")),
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
        <Line options={options} data={data} />
        {consoleChartData}
    </div>
  )
}

export default CryptoChart