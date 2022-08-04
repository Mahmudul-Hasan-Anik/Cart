import React,{useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button,IconButton,FormControl,TextField,InputLabel,InputAdornment,OutlinedInput,Grid } from '@mui/material';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';


const Login = ()=> {

  const {userState, userDispatch} = useContext(Store)
  const {user} = userState
  const navigate = useNavigate()
  const {search} = useLocation()
  const redirectURL = new URLSearchParams(search).get('redirect')
  const redirect = redirectURL ? redirectURL : '/'

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange =(props)=>(event) => {
      setValues({ ...values, [props]: event.target.value });
    };

  // MUI PROVIDE FOR SHOW AND HIDE PASSWORD 
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouse = (event) => {
    event.preventDefault();
  };

  // SUBMITING VALUE AND SEND BACKEND
  const handleSubmit = (e)=>{
    e.preventDefault()

    const { email, password} = values

    if(!email || !password){
      toast.error('Please fill all input box')
    }else if(!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){
      toast.error('Please enter a valid email')
    }else if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
      toast.error('Minimum eight characters, at least one letter, one number and one special character')
    }else{

      axios.post('/user/api/signin', {
        email: email,
        password: password
      }).then((data)=>{
        navigate('/')
        userDispatch({
          type: 'USER_LOGIN',
          payload: data.data
        })

        localStorage.setItem('user', JSON.stringify(data.data))

        setValues({
          ...values,
           email: '', password: ''
        })
      }) 

      toast.success('Login Successful')
    }
  }

  // REDIRECT AFTER USER IS AVAILABLE
  useEffect(()=>{
    if(user){
      navigate(redirect)
    }
  })

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
                <TextField label="Email" type='email' sx={{ m: 1,  width: '40ch'}} onChange={handleChange('email')} value={values.email}/>
                
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
                    <Button variant="contained" sx={{mt: 2, width:'13ch'}} onClick={handleSubmit}>Sign In</Button>
                    </FormControl>
                </FormControl>
            </Grid>
        </Grid>
      </div>

       
  );
}


export default Login