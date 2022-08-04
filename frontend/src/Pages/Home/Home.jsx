import React from 'react'
import HomeSlider from './HomeSlider'
import {Grid,Box} from '@mui/material'
import HomeDiscount from './HomeDiscount'
import Layout from '../../Components/Layout'

const Home = () => {
  return (
    <Layout className='home' title='Home'>
      <div className='home_column_one'>
          <HomeSlider/>
      </div>
      <div className='home_column_two'>
          <HomeDiscount/>
      </div>

    </Layout>
  )
}

export default Home
