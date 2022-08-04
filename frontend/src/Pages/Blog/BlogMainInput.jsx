import React, { useContext } from 'react'
import {Button, Modal, Box, Typography, Divider, Avatar,Grid,Tooltip,IconButton, FormControl} from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useState } from 'react';
import axios from 'axios'
import { Store } from '../../Store';

const BlogMainInput = (props) => {
  const {userState} = useContext(Store)
  const {user} = userState

  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [document, setDocument] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    
    const formData = new FormData();
    
    formData.append('text', text)
    formData.append('image', image)
    formData.append('video', video)
    formData.append('document', document)
    formData.append('userName', user.name)
    formData.append('userID', user._id)
    formData.append('like', user._id)
    formData.append('time', Date())

    axios.post('http://localhost:8000/blog/post', formData).then(()=>{
      setText('')
      setImage('')
      setVideo('')
      setDocument('')
    })
  }


  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a post
            <Divider/>
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2} >
                <Grid item xs={1}> 
                    <Avatar alt="Remy Sharp"/>
                </Grid>
                <Grid item xs={10} style={{marginTop:'5px', marginLeft:'10px'}}>
                    Mahmudul Hasan
                </Grid>
            </Grid>
          </Box>
        <FormControl encType="multipart/form-data" method="post">
          <Box sx={{ mt: 2 }}>
            <textarea 
                name="post" 
                id="" 
                cols="65" 
                rows="5" 
                placeholder='What do you want to talk about' 
                className='post-input'
                onChange={(e)=>setText(e.target.value)}
                value={text}
            >
            </textarea>

          </Box>

          <Box>
            <Grid container spacing={2} style={{marginTop:'70px'}}>
                <Grid item xs={10}>
                    <Tooltip title="Add photo">
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                            <PhotoCamera/>
                        </IconButton>
                    </Tooltip> 
                    <Tooltip title="Add photo">
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="video/*" type="file" onChange={(e)=>setVideo(e.target.files[0])}/>
                            <SmartDisplayIcon />
                        </IconButton>
                    </Tooltip> 
                    <Tooltip title="Add photo">
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept=".doc,.docx,.pdf" type="file" onChange={(e)=>setDocument(e.target.files[0])}/>
                            <TextSnippetIcon />
                        </IconButton>
                    </Tooltip> 
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' onClick={handleSubmit}>save</Button>
                </Grid>
            </Grid>
          </Box>
          </FormControl>
        </Box>
      </Modal>
    </div>
  )
}

export default BlogMainInput


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: 300,
    borderRadius: 3
  };

