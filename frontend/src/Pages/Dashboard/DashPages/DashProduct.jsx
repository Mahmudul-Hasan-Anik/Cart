import React,{ useState } from 'react'
import { Box,TextField,Button,Select,MenuItem,InputLabel,FormControl, Grid } from '@mui/material'
import axios from 'axios'
// import { Form,Button,Row,Col } from 'react-bootstrap'

const DashProduct = () => {
  const [imageFile, setImageFile] = useState('')
  const [values, setValues] = useState({
    name: '',
    slug: '',
    price: '',
    stock: '',
    catagory: '',
    coupon: '',
    discount: '',
    description: ''
  })
  const handleChange = (e)=>{
     setValues({...values, [e.target.name]: e.target.value})
  }

  const {name,slug,price,stock,coupon,discount,description,catagory} = values

  const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = new FormData();

    formData.append('name', name)
    formData.append('slug', slug)
    formData.append('price', price)
    formData.append('stock', stock)
    formData.append('catagory', catagory)
    formData.append('image', imageFile)
    formData.append('coupon', coupon)
    formData.append('discount', discount)
    formData.append('description', description)

    axios.post('http://localhost:8000/dashboard/api/product', formData)
  }


  
  return (
    <Grid className='dashboard_product_main' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={5} className='Auth_background'>
        <img src='/image/dash.jpg'/>
      </Grid>
      <Grid item xs={7}>
        
        <FormControl className='dashboard_product_design' enctype="multipart/form-data" method="post">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField name='name' label="Name" variant="outlined" size='small' onChange={handleChange} value={name}/>
            <TextField name='slug' label="Slug" variant="outlined" size='small' onChange={handleChange}/>
          </Box>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField name='price' type='number' label="Price" variant="outlined" size='small' onChange={handleChange}/>
            <TextField name='stock' type='number' label="Stock" variant="outlined" size='small' onChange={handleChange}/>
          </Box>

          <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl>

              <InputLabel id="select-label">Catagory</InputLabel>
              <Select 
                name='catagory' 
                label="Catagory" 
                labelId="select-label" 
                size='small' 
                onChange={handleChange}
              >
                <MenuItem value={'Burger'}>Burger</MenuItem>
                <MenuItem value={'Juice'}>Juice</MenuItem>
                <MenuItem value={'Fish Fry'}>Fish Fry</MenuItem>
                <MenuItem value={'Friend Chicken'}>Friend Chicken</MenuItem>
                <MenuItem value={'Healthy'}>Healthy</MenuItem>
                <MenuItem value={'Pizza'}>Pizza</MenuItem>
              </Select>


              </FormControl>
                <Button variant="outlined" component="label" >
                  Upload File
                  <input name='image' type="file" hidden style={{width: '35ch'}} onChange={(e)=>setImageFile(e.target.files[0])}/>
                </Button>
          </Box>

          <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
            <TextField name='coupon' label="Coupon" variant="outlined" size='small' onChange={handleChange}/>
            <TextField name='discount' type='number' label="Discount" variant="outlined" size='small' onChange={handleChange}/>
          </Box>

          <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '52ch' },
              }}
              noValidate
              autoComplete="off"
            >
            <TextField
              size='small'
              name='description'
              label='Description'
              multiline
              rows={2}
              onChange={handleChange}
            />
          </Box>
          <Button variant='contained' style={{textAlign:'start', width:'100px', margin:'10px'}} onClick={handleSubmit}>
            Submit
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default DashProduct




