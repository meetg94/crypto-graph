import axios from 'axios';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import ShowTable from './Components/ShowTable'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50")
          .then(response => {
            setData(response.data)
            console.log(response.data)
          })
  }, [])

  const cryptoList = data.map((coin) => {
     return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">MarketCap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell component="th" scope="row">{coin.id}</TableCell>
            <TableCell align="right" scope="row">{coin.market_cap}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
              // <li>
              //   <button>{coin.id}</button> | {coin.market_cap}
              // </li>
     )
   })
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <p>Crypto Chart</p>
      <ShowTable 
        data={data}/>
    </div>
  );
}

export default App;
