import React from 'react'
import { Typography,Box,Modal,Divider,IconButton, Grid, Tooltip } from '@mui/material'

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ProfileImage = (props) => {
  return (
    <Modal
        keepMounted
        open={props.open}
        onClose={props.handleClose}
      >
        <Box sx={mainStyle}>
          <Typography  variant="h6" component="h2">
            Profile Photo
          </Typography>
          <div className='profile_model_picture'>
            <img src="../image/user.png" style={profileModelImage} />
          </div>
          <Divider style={{background:'gray'}}/>
          
          <Typography sx={{ mt: 2 }} className='profile_model_button'>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Tooltip title="Edit">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <ModeEditIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Add photo">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                  </Tooltip>
                </Grid>
                
                <Grid item xs={2}>
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" size="large">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
                </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
  )
}

export default ProfileImage


const mainStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 380,
    bgcolor: '#1D2226',
    color: 'white',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

const profileModelImage = {
    width:'180px',
    height:'180px',
    cursor: 'pointer'
}
