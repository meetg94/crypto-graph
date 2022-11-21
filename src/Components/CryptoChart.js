import { useState, useEffect } from 'react'

import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { Plugin, Line } from 'react-chartjs-2'
import { Chart as ChartJS, Filler } from "chart.js/auto";

import axios from 'axios'


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

    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'black'
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: 'black'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        hover: {
            mode: 'point',
            intersect: false
        },
    }

    const data = {
        labels: coinChartData.map((value) => {
            return (
                moment(value.x).format("MMM DD")
            )}),
        
        datasets: [
            {
                fill: true,
                data: coinChartData.map(val => val.y),
                borderColor: 'rgb(0,100, 300)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                pointRadius: 0,
            }
        ],
    }

    let plugins = 
        [{
          afterDraw: chart => {
            if (chart.tooltip?._active?.length) {
              let x = chart.tooltip._active[0].element.x;
              let yAxis = chart.scales.y;
              let ctx = chart.ctx;
              ctx.save();
              ctx.beginPath();
              ctx.setLineDash([]);
              ctx.moveTo(x, yAxis.top);
              ctx.lineTo(x, yAxis.bottom);
              ctx.lineWidth = 2;
              ctx.strokeStyle = 'rgba(0, 0, 255, 1)';
              ctx.stroke();
              ctx.restore(); 
            }
          }
        },
        {
        callbacks: {
            label: function(tooltipItem, data) {
                return data['datasets'][0]['data'][tooltipItem['index']] + "%"
                }
            }
        }]

  return (
    <div style={{ height: '800px', width: '90%'}}>
        <Line 
        options={options} 
        data={data} 
        plugins = {plugins} />
    </div>
  )
}

export default CryptoChart