import React, {useEffect, useState} from 'react'
import { Container,Grid,Card,CardContent,CardMedia,Typography,IconButton, Tooltip } from '@mui/material'
import ProfileImage from './ProfileImage';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ProfileSidebar from './ProfileSidebar';
import ProfileEdit from './ProfileEdit';
import Layout from '../../Components/Layout';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../../Store';


const Profile = () => {
    const {userState, userDispatch} = useContext(Store)
    const {user} = userState

    const [profileValue, setProfileValue] = useState('')
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);

    useEffect(()=>{
        async function fatchData(){
           const {data} = await axios.get(`http://localhost:8000/user/api/profile/${user.email}`)
           setProfileValue(data)
        }
        fatchData()
    },[])


  return (
    <Layout title='Profile'>
    <Container style={{width:'1220px',marginTop:'20px'}}>
        <Grid container spacing={2}>
            <Grid item xs={8} md={8}>
                <Card sx={{ width: '100%' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image="../image/cover.png"
                />
                <div className='profile_picture'>
                   <img src={profileValue ? profileValue.image : '../image/user.png'} style={profileImageDesign} onClick={handleOpen}/>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Grid container spacing={2}>
                            <Grid item xs={11}>
                                {profileValue? profileValue.name : ''}
                            </Grid>
                            <Grid item xs={1}>
                                <Tooltip title="Edit">
                                    <IconButton color="primary" aria-label="upload picture" component="label" style={{marginTop:'-100px', color:'black'}} onClick={handleEditOpen}>
                                        <ModeEditIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4} md={4}>
                <ProfileSidebar/>
            </Grid>
        </Grid>
    </Container>



    {/*========= MODAL ========= */}
    <ProfileImage open={open} handleClose={handleClose}/>
    <ProfileEdit editOpen={editOpen} handleEditClose={handleEditClose}/>
    
    </Layout>
  )
}

export default Profile


const profileImageDesign = {
    width:'140px',
    height:'140px',
    border:'6px solid white',
    borderRadius:'100%',
    cursor: 'pointer'
}
