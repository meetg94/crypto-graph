import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function ShowTable({ data }) {

  return (
    <div className='table-container'>
      <Typography align='left'>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Price</TableCell>
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
                    <TableCell component="th" scope="row">{coin.market_cap_rank}.</TableCell>
                    <TableCell component="th" scope="row"><Avatar src={coin.image}/></TableCell>
                    <TableCell component="th" scope="row">
                      <Link to={`/coin/${coin.id}`}>
                        <Button>{coin.name}</Button>
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
      </Typography>
    </div>
  )
}

export default ShowTable