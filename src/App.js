import axios from 'axios';
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './Components/Navbar'

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
              <li>
                {coin.id} {coin.market_cap}
              </li>
     )
   })
  return (
    <div className="App">
      <Navbar />
      <p>Crypto Chart</p>
      {cryptoList}
      
    </div>
  );
}

export default App;
