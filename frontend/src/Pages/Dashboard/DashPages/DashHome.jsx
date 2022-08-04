import React from 'react'
import { Container,Box,Grid,Card,CardContent,Typography } from '@mui/material'

const DashHome = () => {
  return (
    <Container>
       <Box >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='dashboard_home'>
        <Grid item xs={4}>
          <Card >
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Product
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card >
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                Product Catagory
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card >
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                User
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default DashHome



    