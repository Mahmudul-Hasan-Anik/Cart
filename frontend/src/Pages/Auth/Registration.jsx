import React,{useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button,IconButton,FormControl,TextField,InputLabel,InputAdornment,OutlinedInput,Grid } from '@mui/material';
import {Link} from 'react-router-dom'


const Registration = ()=> {
  const [values, setValues] = useState({
    password: '',
    conPassword: '',
    showPassword: false,
    showConPassword: false
  });

  const handleChange =(props)=>(event) => {
      setValues({ ...values, [props]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickshowConPassword = () => {
    setValues({
      ...values,
      showConPassword: !values.showConPassword
    });
  };

  const handleMouse = (event) => {
    event.preventDefault();
  };

  return (
    
          <div className='Auth_main'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} className='Auth_background'>
                <img src="/image/Login.jpg"/>
                <Link to='/login'>Already have an account</Link>
            </Grid>
            <Grid item xs={6}>
            <h3>Sign Up</h3>
            <FormControl sx={{ m: 1,  width: '40ch'}} variant="outlined" className='Auth_form'>
                <TextField label="Name" sx={{ m: 1, width: '40ch' }}/>
                <TextField label="Email" sx={{ m: 1,  width: '40ch'}}/>
                
                    <FormControl sx={{ m: 1,width: '40ch' }} variant="outlined">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouse}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                    
                    <FormControl sx={{ m: 1,width: '40ch' }} variant="outlined" >
                    <InputLabel>Conform Password</InputLabel>
                    <OutlinedInput
                        type={values.showConPassword ? 'text' : 'password'}
                        value={values.conPassword}
                        onChange={handleChange('conPassword')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            onClick={handleClickshowConPassword}
                            onMouseDown={handleMouse}
                            >
                            {values.showConPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Conform Password"
                    />
                    <Button variant="contained" sx={{mt: 2, width:'13ch'}}>Sign Up</Button>
                    </FormControl>
                </FormControl>
            </Grid>
        </Grid>
      </div>

       
  );
}


export default Registration



    