import React,{useContext} from 'react'
import { Card,CardContent,CardMedia,Typography } from '@mui/material'
import { Store } from '../../Store'

const BlogUser = ({profile}) => {
  return (
    <>
    <Card sx={{ width: '100%' }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="60"
            image="../image/cover.png"
        />
        <div className='blog_profile_picture'>
            <img src={profile ? profile.image : '../image/user.png'} style={profileImageDesign}/>
        </div>
        <CardContent className='blog_content'>
            <Typography gutterBottom variant="p" component="div" style={{fontWeight:'bold'}}>
                {profile ? profile.name : ''}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                MERN Stack Developer | Front-End Developer 
            </Typography>
        </CardContent>
    </Card>
    </>
  )
}

export default BlogUser


const profileImageDesign = {
    width:'40px',
    height:'40px',
    border:'6px solid white',
    borderRadius:'100%',
    cursor: 'pointer',
    // marginTop: '-50px'
  }