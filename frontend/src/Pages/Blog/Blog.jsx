import React from 'react'
import { Container,Grid } from '@mui/material'
import BlogUser from './BlogUser'
import BlogMain from './BlogMain'
import BlogSidebar from './BlogSidebar'
import Layout from '../../Components/Layout'

const Blog = () => {
  return (
    <Layout>
    <Container style={{width:'1220px', marginTop:'20px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
           <BlogUser/>
        </Grid>
        <Grid item xs={6}>
           <BlogMain/>
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
