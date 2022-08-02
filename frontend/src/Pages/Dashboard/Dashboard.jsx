import React from 'react'
import DashSidebar from './DashPages/DashSidebar'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{width:'1220px',marginTop:'20px'}}>
        <Grid item xs={2}>
            <DashSidebar/>
        </Grid>
        <Grid item xs={9} style={{margin: '0px 0px 0px 100px'}}>
           <Outlet />
        </Grid>
    </Grid>
  )
}

export default Dashboard

