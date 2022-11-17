import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Logo from '../../logo.png'

function About() {
  return (
    <div className='about-container'>
      <>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={Logo}
              alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About Us
              </Typography>
              <Typography variant="body1" color="black">
              Coin Hippo is a cryptocurrency data aggregation and tracking web site that provides 360
              degree overview of digital currencies and provides tools for users to fundamentally analyze the market.
              </Typography>
              {<br/>}
              <Typography variant="body1" color="black">
              In addition to tracking price, volume, and market capitalization, Coin Hippo tracks community growth,
              open-source development, major events and on-chain metrics.
              <br/>
              It was founded in 2022 and is based in Canada. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    </div>
  )
}

export default About