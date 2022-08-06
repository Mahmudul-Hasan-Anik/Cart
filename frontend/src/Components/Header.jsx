import React,{useState,useContext} from 'react'
import { Box,AppBar,Toolbar,IconButton,Typography,Menu,Container,Button,Tooltip,MenuItem,Badge,Avatar,Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';



const Header = () => {
    const {userState, userDispatch} = useContext(Store)
    const {user} = userState
    const navigate = useNavigate()

    // console.log(user)

  // MUI PROVIDE -> START
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {setAnchorElNav(event.currentTarget)};
    const handleOpenUserMenu = (event) => {setAnchorElUser(event.currentTarget)};
    const handleCloseNavMenu = () => {setAnchorElNav(null)};
    const handleCloseUserMenu = () => {setAnchorElUser(null)};
  // MUI PROVIDE -> END

  const handleLogOut = ()=>{
    userDispatch({type: 'USER_LOGOUT'})
    localStorage.removeItem('user')
    navigate('/')
  }
 
  return (
    
    <AppBar position="static" style={{background:'#10B981'}}>
      <Container style={{width:'1220px'}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CART
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/'>Home</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/product'>Product</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to='/blog'>Blog</Link>
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CART
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='header_menu_button'>
              <Button sx={{my: 2, color: 'white', display: 'block'}} ><Link to='/'>Home</Link></Button>
              <Button sx={{my: 2, color: 'white', display: 'block'}} ><Link to='/product'>Product</Link></Button>
              <Button sx={{my: 2, color: 'white', display: 'block'}} > <Link to='/blog'>Blog</Link></Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Stack direction="row" spacing={1}>
            <Link to='/cart'>
              <IconButton size="small" title='CART' style={{color:'white',marginRight:'1rem'}}>
                <Badge badgeContent={0} color="secondary" showZero>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to='/wish'>
              <IconButton size="small" title='CART' style={{color:'white',marginRight:'1rem'}}>
                <Badge badgeContent={0} color="secondary" showZero>
                  <FavoriteIcon/>
                </Badge>
              </IconButton>
            </Link>

              {user? 
                  <Avatar
                    src={user.image}
                    onClick={handleOpenUserMenu}
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                  />
                  :
                  <Tooltip title="Open settings"> 
                    <Button>
                      <Link to='/login' style={{textDecoration:'none',color:'white'}}>Login</Link>
                    </Button>
                  </Tooltip>
              }
            </Stack>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to='/profile'>Profile</Link>
                  </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to='/dashboard'>Dashboard</Link>
                  </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogOut}>Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
