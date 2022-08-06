import React,{useEffect, useState,useContext} from 'react'
import {Card, CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,IconButton,Grid,Menu,MenuItem,Stack, Divider} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

import axios from 'axios';
import moment from 'moment'
import { Store } from '../../Store';

const BlogPostShow = ()=>{
    const {userState} = useContext(Store)
    const {user} = userState  

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [comment, setComment] = useState('')
    const [exitComment, setExitComment] = useState('')
    const [getData, setGetData] = useState([])

    useEffect(()=>{
        async function fatchData(){
            const {data} = await axios.get('/blog/post/show')
            setGetData(data)
        }
        fatchData()
    },[])


// ADD AND UPDATE LIKE
    const handleLike = (id)=>{
      axios.patch(`/blog/post/like/${id}`, {
        LikerID: user._id,
        LikerName: user.name
      })
    }

// ADD AND UPDATE COMMENTS OPTION
    const handleComment = (id)=>{
      const existingPost = getData.find((item)=>item._id == id)
      setExitComment(existingPost)
    }

    const handleCommentSubmit = (id)=>{
     axios.patch(`/blog/post/comment/update/${id}`,{
       comment: comment,
       whoComment: user.name
     })
     .then(()=>{
       setComment('')
     })
    }
 
  return (
    <>
    {getData.map((item, index)=>(

    <Card sx={{ width: '100%', marginTop: '10px',marginBottom:'10px'}} key={index}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
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
        title={item.userName}
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

     {/* LIKE ICON AND LIKE AMOUNT SHOW */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{padding:'5px 0px', marginLeft:'10px'}}>
            <Grid item xs={6}>
            <Stack direction="row" spacing={-1}>
              <ThumbUpIcon style={{color:'blue', width:'18px'}}/>
              <FavoriteIcon style={{color:'red',width:'18px'}}/>
              <EmojiEmotionsIcon style={{color:'orange',width:'18px'}}/>
              {item.like[0] ?
              
              <span style={{marginLeft: '10px'}}>{`${item.like[0].LikerName} ${item.like.length >1 ? `and ${item.like.length - 1} others` : ''}`}</span>
              :
                ''
             }
            </Stack>
            </Grid>
            <Grid item xs={6}>
            
            </Grid>
        </Grid>
      <CardActions disableSpacing>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{textAlign:'center', marginBottom:'13px'}}>
            <Grid item xs={3} className='post-card' onClick={()=>handleLike(item._id)}>
            <span>Like</span>
                <IconButton>
                    <ThumbUpIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className='post-card' onClick={()=>handleComment(item._id)}>
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
     


      <Grid container spacing={2}  className='blog_main' >
        <div className={exitComment._id == item._id ? "showBox" : "hideBox"}>

            <Grid item xs={2}> 
                <Avatar alt="Remy Sharp" style={{marginLeft:'35px', marginTop:'10px'}}/>
            </Grid>
            <Grid item xs={10}>
                <input type="text" placeholder='Add a Comment' style={{width:'80%',}} onChange={(e)=>setComment(e.target.value)} value={comment}/>
                <IconButton style={{marginLeft:'20px', color:'blue'}} onClick={()=>handleCommentSubmit(item._id)}>
                    <SendIcon  />
                </IconButton>
            </Grid>
        </div>
        </Grid>

    </Card>
    ))}
    </>
  );
}

export default BlogPostShow
