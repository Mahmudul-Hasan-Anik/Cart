import React, {useState} from 'react'
import { Container,Grid,Card,CardActions,CardContent,CardMedia,Button,Typography,IconButton, Tooltip } from '@mui/material'
import ProfileImage from './ProfileImage';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ProfileSidebar from './ProfileSidebar';
import ProfileEdit from './ProfileEdit';


const Profile = () => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
  return (
    <>
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
                   <img src="../image/user.png" style={profileImageDesign} onClick={handleOpen}/>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Grid container spacing={2}>
                            <Grid item xs={11}>
                                Mahmudul Hasan
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
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
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
    
    </>
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
