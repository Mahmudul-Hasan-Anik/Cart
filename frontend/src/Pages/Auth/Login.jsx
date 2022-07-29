import React,{useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button,IconButton,FormControl,TextField,InputLabel,InputAdornment,OutlinedInput,Grid } from '@mui/material';
import {Link} from 'react-router-dom'


const Login = ()=> {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
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
  const handleMouse = (event) => {
    event.preventDefault();
  };

  return (
    
          <div className='Auth_main'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} className='Auth_background_login'>
                <img src="/image/Registration.jpg"/>
                <Link to='/registration'>Create an account</Link>
            </Grid>
            <Grid item xs={6}>
            <h3>Sign In</h3>
            <FormControl sx={{ m: 1,  width: '40ch'}} variant="outlined" className='Auth_form'>
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
                    <Button variant="contained" sx={{mt: 2, width:'13ch'}}>Sign In</Button>
                    </FormControl>
                </FormControl>
            </Grid>
        </Grid>
      </div>

       
  );
}


export default Login