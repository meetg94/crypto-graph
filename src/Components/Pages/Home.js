import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowTable from '../ShowTable';

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50")
          .then(response => {
            setData(response.data)
            console.log(response.data)
          })
  }, [])

  return (
    <div>
      <ShowTable 
        data={data}
          />
    </div>
  )
}

export default Home