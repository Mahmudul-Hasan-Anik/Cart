import React from 'react'
import { Typography,Box,Modal, Divider,TextField, FormControl,InputLabel,MenuItem,Select, Button } from '@mui/material'
import { useState } from 'react'

const ProfileEdit = (props) => {
  const [editValues, setEditValues] = useState({
    name: '',
    industry: '',
    degree: '',
    country: '',
    city: '',
    email: '',
    phone: '',
  })
  const [position, setPosition] = useState('')

  const handleProfileEdit = (e)=>{
    setEditValues({...editValues, [e.target.name]: e.target.value})
  }

  const handlePositionChange = (e)=>{
    setPosition(e.target.value)
  }
  return (
    <Modal
        keepMounted
        open={props.editOpen}
        onClose={props.handleEditClose}
      >
        <Box sx={mainStyle}>
          <Typography  variant="h6" component="div">
            Edit Intro
            <Divider/>
          </Typography>
          <div className='profile_edit'>
            <h6>* Indicates required</h6>
          <Box>
            <TextField label="Name" name='name' variant="outlined" size='small' style={inputStyle} onChange={handleProfileEdit}/>
          </Box>

          <Box>
            <h3>Current position</h3>
            <h6>Position*</h6>
           
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size='small'>Position</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Position"
                size='small'
                style={inputStyle}
                onChange={handlePositionChange}
              >
                <MenuItem value={'Student'}>Student</MenuItem>
                <MenuItem value={'Programmer'}>Programmer</MenuItem>
                <MenuItem value={'Banker'}>Banker</MenuItem>
              </Select>
            </FormControl>

            <p >Industry *</p>
            <TextField label="Industry" name='industry' variant="outlined" size='small' style={inputStyle} onChange={handleProfileEdit}/>
          </Box>

          <Box>
            <h3>Education</h3>
            <h6>Last Degree*</h6>
            <TextField label="Degree" name='degree' variant="outlined" size='small' style={inputStyle} onChange={handleProfileEdit}/>
          </Box>
          <Box>
            <h3>Location</h3>
            <p>Country/Region*</p>
            <TextField label="Country" name='country' variant="outlined" size='small' style={inputStyle} onChange={handleProfileEdit}/>
            <p>City*</p>
            <TextField label="City" name='city' variant="outlined" size='small' style={inputStyle} onChange={handleProfileEdit}/>
          </Box>

          <Box>
            <h3>Contact info</h3>
            <p>Email*</p>
            <TextField label="Email" name='email' variant="outlined" size='small' type='email' style={inputStyle} onChange={handleProfileEdit}/>

            <p>Phone</p>
            <TextField label="Phone" name='phone' variant="outlined" size='small' type='number' style={inputStyle} onChange={handleProfileEdit}/>
          </Box>
          </div>

          <Box  variant="h6" component="div" style={{textAlign:'end'}}>
            <Divider/>
            <Button variant='contained' style={{marginTop:'15px'}}>Save</Button>
          </Box>
        </Box>
      </Modal>
  )
}

export default ProfileEdit


const mainStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 480,
    bgcolor: '#FFFFFF',
    color: 'black',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

const inputStyle = {
  width: 650,
  marginBottom: '15px'
}


