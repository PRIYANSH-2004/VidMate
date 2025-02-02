import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
const ChannelCard = ({channelDetail}) => {
  return (
    <Box
    sx={{
      boxShadow:'none',
      borderRadius:"20px",
      display:'felx',
      justifyContent:'center',
      alignItems:'center',
      width:{md:"320px"  , xs:"356px"},
      height:"326px",
      margin:'auto'
    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display:'flex', flexDirection:"column", justifyContent:'center', textAlign:'center' , color:"#fff"}}>
          <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url  || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:"50%", height:'180px', width:'180px',mb:2, border:'1px solid #e3e3e3'}}
          >
            <Typography variant='h6'>
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{fontSize:15 , color:'gray', ml:'5px'}}>
                {channelDetail?.statistics?.subscriberCount && (
                  <Typography>
                    {pasreInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                  </Typography>
                )}

              </CheckCircle>
            </Typography>
          </CardMedia>
      </CardContent>
      </Link>
      </Box>
  )
}

export default ChannelCard
