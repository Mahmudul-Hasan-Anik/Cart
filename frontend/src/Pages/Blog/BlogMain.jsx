import React,{useState} from 'react'
import {Card,CardContent,Grid,Avatar} from '@mui/material'
import BlogMainInput from './BlogMainInput';
import BlogPostShow from './BlogPostShow';

const BlogMain = ({profile}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={2} className='blog_main'>
            <Grid item xs={2}> 
                <Avatar alt="Remy Sharp" style={{marginTop:'10px',marginLeft:'10px',}} src={profile ? profile.image : ''}/>
            </Grid>
            <Grid item xs={10}>
                <input type="text" placeholder='start a post' onClick={handleOpen}/>
            </Grid>
        </Grid>

      </CardContent>
    </Card>
        <BlogPostShow />

    {/* ====== MODAL ====== */}
    <BlogMainInput open={open} handleClose={handleClose} setOpen={setOpen}/>
    </>
  )
}

export default BlogMain

