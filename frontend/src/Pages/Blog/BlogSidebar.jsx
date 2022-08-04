import React from 'react'
import { Card,CardContent,CardMedia,Typography } from '@mui/material'

const BlogSidebar = () => {
  return (
    <>
    <Card sx={{ width: '100%' }}>
        <h4 style={{marginLeft:'20px'}}>Add to your feed</h4>
        <CardContent className='blog_content'>
            <Typography gutterBottom variant="p" component="div" >
                <img src='./image/Banner/sideBanner.jpg' style={{width:'100%', height:'200px'}}/>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, 
                with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
    </Card>
    </>
  )
}

export default BlogSidebar

const profileImageDesign = {
    width:'40px',
    height:'40px',
    border:'6px solid white',
    borderRadius:'100%',
    cursor: 'pointer',
    // marginTop: '-50px'
  }