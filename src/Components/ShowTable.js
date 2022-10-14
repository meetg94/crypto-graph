import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ShowTable({ data}) {

  const roundPercent = Math.round()

  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Price Change 24h</TableCell>
              <TableCell align="right">MarketCap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((coin) => {
            return (
                <TableRow 
                    key={coin.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row"><button>{coin.name}</button></TableCell>
                    <TableCell align="right" scope="row">{coin.current_price}</TableCell>
                    <TableCell align="right" scope="row">{coin.symbol}</TableCell>
                    <TableCell align="right" scope="row">{Math.round((coin.price_change_percentage_24h)*10)/10}</TableCell> 
                    <TableCell align="right" scope="row">{coin.market_cap}</TableCell> 
                </TableRow>
            )})}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ShowTable