import React from 'react'
import DashSidebar from './DashSidebar'
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
            <DashSidebar/>
        </Grid>
        <Grid item xs={10}>
           <h2>hello</h2> 
        </Grid>
    </Grid>
  )
}

export default Dashboard

