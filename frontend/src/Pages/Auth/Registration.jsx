import React,{useState,useContext,useEffect} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button,IconButton,FormControl,TextField,InputLabel,InputAdornment,OutlinedInput,Grid } from '@mui/material';
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../../Store';


const Registration = ()=> {

  const {userState, userDispatch} = useContext(Store)
  const {user} = userState

  console.log(userState.user.name)

  const navigate = useNavigate()
  const {search} = useLocation()
  const rediractUrl  = new URLSearchParams(search).get('redirect')
  const redirect = rediractUrl ? rediractUrl : '/'
  console.log(redirect)

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    conPassword: '',
    showPassword: false,
    showConPassword: false
  });

// MUI PROVIDE FOR SHOW AND HIDE PASSWORD -> START
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
  // MUI PROVIDE FOR SHOW AND HIDE PASSWORD -> END

  const handleSubmit = (e)=>{
    e.preventDefault()

    const {name, email, password, conPassword} = values

    if(!name || !email || !password || !conPassword){
      toast.error('Please fill all input box')
    }else if(!name.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)){
      toast.error(`First Letter must be uppercase`)
    }else if(!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){
      toast.error('Please enter a valid email')
    }else if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
      toast.error('Minimum eight characters, at least one letter, one number and one special character')
    }else if(password !== conPassword){
      toast.error('Password not matched')
    }else{

      navigate('/login')

      axios.post('/user/api/signup', {
        name: name,
        email: email,
        password: password
      }).then(()=>{
        setValues({
          ...values,
          name: '', email: '', password: '', conPassword: ''
        })
      }) 

      toast.success('Registration Successful')
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
            <Grid item xs={6} className='Auth_background'>
                <img src="/image/Login.jpg"/>
                <Link to='/login'>Already have an account</Link>
            </Grid>
            <Grid item xs={6}>
            <h3>Sign Up</h3>
            <FormControl sx={{ m: 1,  width: '40ch'}} variant="outlined" className='Auth_form'>
                <TextField label="Name" sx={{ m: 1, width: '40ch' }} onChange={handleChange('name')}  value={values.name}/>
                <TextField label="Email" sx={{ m: 1,  width: '40ch'}} onChange={handleChange('email')} value={values.email}/>
                
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
                    <Button variant="contained" sx={{mt: 2, width:'13ch'}} onClick={handleSubmit}>Sign Up</Button>
                    </FormControl>
                </FormControl>
            </Grid>
        </Grid>
      </div>

       
  );
}


export default Registration



    