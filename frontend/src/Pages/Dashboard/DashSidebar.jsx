import React from 'react'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const DashSidebar = () =>  {
  return (
    <Paper sx={{ width: 230,height:'580px' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <CloudUploadIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Set Product</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FormatAlignLeftIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Set Catagory</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ManageAccountsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            User Information
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default DashSidebar