import React,{useEffect, useState} from 'react'
import {Card, CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,IconButton,Grid,Menu,MenuItem,Box, Divider} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplyIcon from '@mui/icons-material/Reply';

import MenuIcon from '@mui/icons-material/Menu';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import moment from 'moment'
import { Link } from 'react-router-dom';

const BlogPostShow = ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    const [getData, setGetData] = useState([])
    useEffect(()=>{
        async function fatchData(){
            const {data} = await axios.get('/blog/post/show')
            setGetData(data)
        }
        fatchData()
    },[])

    console.log(getData)


  return (
    <>
    {getData.map((item, index)=>(

    <Card sx={{ width: '100%', marginTop: '10px',marginBottom:'10px'}} key={index}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
            <>
                <IconButton 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
            </>
        }
        title="Mahmudul Hasan"
        subheader={moment(item.time).fromNow()}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      />
      <CardActions disableSpacing>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:'center'}}>
            <Grid item xs={3} className='post-card'>
            <span>Like</span>
                <IconButton>
                    <ThumbUpIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className='post-card'>
            <span>Comment</span>
                <IconButton>
                    <InsertCommentIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className='post-card'>
            <span>Share</span>
                <IconButton>
                    <ReplyIcon />
                </IconButton>
            </Grid>
        </Grid>
      </CardActions> 
    </Card>
    ))}
    </>
  );
}

export default BlogPostShow
