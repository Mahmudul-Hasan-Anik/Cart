import React from 'react'
import { Card,CardActions,CardContent,Button,Typography } from '@mui/material'

const ProfileSidebar = () => {
  return (
    <>
    <Card sx={{ width: '100%' }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    </>
  )
}

export default ProfileSidebar