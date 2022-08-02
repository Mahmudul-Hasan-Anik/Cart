import React from 'react'
import {MenuList,MenuItem,Paper,ListItemIcon,Typography} from '@mui/material'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

const DashSidebar = () =>  {
  return (
    <Paper sx={{ width: 200 , marginLeft:'100px'}}>
      <MenuList className='dashboard_sidebar'>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            <Link to='/dashboard/home'>Dashboard Home</Link>
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CloudUploadIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            <Link to='/dashboard/product'>Set Product</Link>
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FormatAlignLeftIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            <Link to='/dashboard/catagory'>Set Catagory</Link>
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ManageAccountsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            <Link to='/dashboard/user'>User Information</Link>
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default DashSidebar