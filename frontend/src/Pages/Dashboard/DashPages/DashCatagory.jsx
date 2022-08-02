import React from 'react'
import { Box,TextField,Button,Select,MenuItem,InputLabel,FormControl, Grid } from '@mui/material'

const DashCatagory = () => {
  return (
    <Grid className='dashboard_product_main' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6} className='dashboard_catagory_background'>
        <img src='/image/catagory.jpg'/>
      </Grid>
      <Grid item xs={6}>
        
        <FormControl className='dashboard_catagory_form'>
          <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl>
                <TextField label="Catagory" variant="outlined"/>
              </FormControl>
          </Box>
              <Button variant='contained' style={{textAlign:'start', width:'100px', margin:'10px'}}>Submit</Button>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default DashCatagory