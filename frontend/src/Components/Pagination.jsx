import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import DummyData from '../Data';
import axios from 'axios'

import {Card,CardActions,CardContent,CardMedia,Button,Typography,Grid, IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';



const Pagination = (props) => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(4);
  const [pageCount, setPageCount] = useState(0)
  const [product, setProduct] = useState([])

const getData = () => {
    //Call api for data
    const res =  product
    // const data = res.data; {data nai, due to frontend theke data nitaci}

    const slice = res.slice(offset, offset + perPage) 
    // uporer line, backend theke data nila, res ar jaygai data hobe
    setData(slice)
    setPageCount(Math.ceil(res.length / perPage))
}
const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

useEffect(() => {
   getData()
}, [offset,product])


useEffect(()=>{
    async function fatchData(){
        const {data} = await axios.get('http://localhost:8000/dashboard/api/product/show')
        setProduct(data)
    }
    fatchData()
},[])


  return (
    <>    
    <div className='main_container'>
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item, index)=>(
        <Grid item xs={2} sm={3} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={item.image}
            />
            <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography gutterBottom variant="small" component="div">
                    ${item.price}.00
                </Typography>
                </Grid>
            </Grid>
                <Typography variant="body2" color="text.secondary">
                {item.description}
                </Typography>
            </CardContent>
            <CardActions style={{margin:'0px 0px 20px 10px'}}>
                <IconButton size="small" title='ADD CART'>
                <ShoppingCartIcon/>
                </IconButton>
                <IconButton size="small" title='ADD WISHLIST'>
                <FavoriteIcon/>
                </IconButton>
            </CardActions>
            </Card>
        </Grid>  
        ))}
        </Grid>
    </div>
 
      

       <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
    </>
  )
}

export default Pagination