import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../themeConfig/theme";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import logoRegister from "../assets/logoRegister.png";
import { Button } from '@mui/material';
import  ReCAPTCHA  from 'react-google-recaptcha';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Avatar } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useForm } from "react-hook-form"
import { loginPost } from '../services/POST/Login';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from '../App/reducers/user/userSlice';

const Login = () => {

  
  
  const dispatch = useDispatch(); //Disparar actions al reducer (para que modifique el estado)
  
  const navigate  = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRecaptchaChange = (value) => {
    console.log('Token: ' + value);
    setCaptchaValue(value);
  }

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      //  if (!captchaValue) {
      //   return;
      // }
      const response = await loginPost(data);

      let { email, token, role } = response.data;
      console.log(email, token, role)

      dispatch(loginUser({
        email: email,
        token: token,
        role: role.role,
        isOnline: true
      }))
      
      if(response.data.role.role === 'admin'){
        console.log("es", role)
        navigate('/admin/dashboard');
      }

      if(response.data.role.role === 'user'){
        console.log("es", role)
        navigate('/home');
      }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.message,
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }

  return (
    <Box className='loginContainerAll'>
      <Box className='loginContainer' >
        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
          <h4>Bienvenido de vuelta!</h4>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 5 }}>
            <Box>
              <ThemeProvider theme={theme}>
                <TextField id="outlined-basic" label="Correo Electrónico " variant="filled" color="ochre" sx={{ width: '55ch' }} name='email'
                    {...register("email")} />
              </ThemeProvider>
            </Box>

            <Box>
              <ThemeProvider theme={theme}>
                <FormControl sx={{ width: '55ch' }} variant="filled" color="ochre" >
                  <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    {...register("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </ThemeProvider>
            </Box>
          </Box>

          {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <ReCAPTCHA
              sitekey="6LfXuEIpAAAAAOuhIOnh-XVH0Q6bXSTG0RbJxzLv"
              onChange={handleRecaptchaChange}
            />
          </Box> */}

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button variant="contained" sx={{ backgroundColor: '#6246ea', color: '#fffffe', width: 300 }} type='submit'>Iniciar Sesión</Button>
          </Box>
          
           <hr style={{marginTop: 50}} />      

          <Box sx={{display: 'flex', justifyContent: 'center', mt: 5, gap: 3}}>
            <Avatar sx={{ backgroundColor: '#e45858', cursor: 'pointer' }}>
                <FacebookOutlinedIcon />
            </Avatar>   

            <Avatar sx={{ backgroundColor: '#e45858', cursor: 'pointer' }}>
                <GoogleIcon />
            </Avatar>   

            <Avatar sx={{ backgroundColor: '#e45858', cursor: 'pointer'  }}>
                <TwitterIcon />
            </Avatar> 
          </Box>
        </form>
        <Box className='loginImage'>
          <img src={logoRegister} width={440} height={440} alt="Logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
