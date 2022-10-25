import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Line } from "react-chartjs-2";
import CryptoChart from './CryptoChart';
import { click } from '@testing-library/user-event/dist/click';
import { Routes, Route, Link } from "react-router-dom";

function ShowTable({ data, setId }) {

  const [clicked, setClicked] = useState(false)
  const [chartData, setChartData] = useState([]) 

  const handleClick = (coin_id) => {

    const baseUrl = `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=7`
    axios.get(baseUrl)
      .then(response => {
        setChartData(response.data.prices)
      })
  }

  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Price Change 24h</TableCell>
              <TableCell align="right">MarketCap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((coin, i) => {
            return (
                <TableRow
                    coin_id = {coin.id}
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{coin.market_cap_rank}.</TableCell>
                    <TableCell component="th" scope="row"><Link to={`/{coin.id}`} state={{ from: "chartData"}}><button 
                                                                                onClick={() => { handleClick(coin.id)
                                                                                  setClicked(true)}}
                                                                                  >{coin.name}
                                                                              </button>
                                                          </Link>
                    </TableCell>
                    <TableCell component="th" scope="row">{coin.symbol.toUpperCase()}</TableCell>
                    <TableCell align="right" scope="row">${coin.current_price.toLocaleString("en-US")}</TableCell>
                    <TableCell align="right" scope="row" style={{color: coin.price_change_percentage_24h < 0 ? "red" : "green"}}>
                      {Math.round((coin.price_change_percentage_24h)*10)/10}%</TableCell> 
                    <TableCell align="right" scope="row">${coin.market_cap.toLocaleString("en-US")}</TableCell> 
                </TableRow>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
      <Routes> 
        <Route />
        <Route path="/:coin_id" element={<CryptoChart />} />
      </Routes>
    </div>
  )
}

export default ShowTable