import React,{useEffect, useState,useContext} from 'react'
import { Container,Grid } from '@mui/material'
import BlogUser from './BlogUser'
import BlogMain from './BlogMain'
import BlogSidebar from './BlogSidebar'
import Layout from '../../Components/Layout'
import axios from 'axios'
import { Store } from '../../Store'

const Blog = () => {
  const {userState} = useContext(Store)
  const {user} = userState
  const [profileValue, setProfileValue] = useState('')
  
  useEffect(()=>{
    async function fatchData(){
       const {data} = await axios.get(`http://localhost:8000/user/api/profile/${user.email}`)
       setProfileValue(data)
    }
    fatchData()
},[])
  return (
    <Layout>
    <Container style={{width:'1220px', marginTop:'20px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
           <BlogUser profile={profileValue}/>
        </Grid>
        <Grid item xs={6}>
           <BlogMain profile={profileValue}/>
        </Grid>
        <Grid item xs={3} >
          <BlogSidebar/>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  )
}

export default Blog
