import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Contact() {
  return (
    <div className='contact-container'>
              <Card sx={{ maxWidth: 345 }} className='card-container'>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contact Us
              </Typography>
              <Typography variant="body1" color="black">
              Coin Hippo is created by Meet Guleria. A software developer based in Vancouver, Canada
              </Typography>
              {<br/>}
              <Typography variant="body1" color="black">
              <p>As a Developer, he enjoys bridging the gap between engineering and design — 
              combining his technical knowledge with his keen eye for design to create a beautiful a product. </p>
              <p>Get in touch 👉🏼: meetguleria94@gmail.com</p> 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>

  )
}

export default Contact