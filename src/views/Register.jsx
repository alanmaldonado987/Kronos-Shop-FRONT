import React, { useState } from 'react';
import { Box, TextField, showPassword, InputAdornment, FormControl, InputLabel, FilledInput, IconButton, Button } from "@mui/material";
import { useForm } from "react-hook-form"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../themeConfig/theme";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logoRegister from "../assets/logoRegister.png";
import  ReCAPTCHA  from 'react-google-recaptcha';
import { registerPost } from '../services/POST/Register';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleRecaptchaChange = (event) => {
        console.log('Token: ' + event);
    }

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await registerPost(data);
    console.log(response);
  }

    return(
        <>
            <h4 style={{ textAlign: 'center', marginTop: 50, fontSize: 32 }} >Registrate!</h4>
            <Box className='registerContainer'> 
                <form className='registerForm' id="formRegister" onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridTemplateRows: 'repeat(2,100px)', gap: 5 }}>
                        <Box>
                            <ThemeProvider theme={theme}>
                                <FormControl sx={{ width: '55ch' }} variant="filled" color="ochre" >
                                    <TextField id="outlined-basic" label="Nombre" variant="filled" color="ochre" sx={{ width: '55ch' }} name='email'
                                    {...register("name")} />
                                </FormControl>
                            </ThemeProvider>
                        </Box>

                        <Box>
                            <ThemeProvider theme={theme}>
                                <FormControl sx={{ width: '55ch' }} variant="filled" color="ochre" >
                                    <TextField id="outlined-basic" label="Apellido" variant="filled" color="ochre" sx={{ width: '55ch' }} name='lastname'
                                    {...register("lastname")} />
                                </FormControl>
                            </ThemeProvider>
                        </Box>

                        <Box>
                            <ThemeProvider theme={theme}>
                                <FormControl sx={{ width: '55ch' }} variant="filled" color="ochre" >
                                    <TextField id="outlined-basic" label="Correo Electrónico " variant="filled" color="ochre" sx={{ width: '55ch' }} name='email'
                                    {...register("email")} />
                                </FormControl>
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
                </form>
            </Box>
             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <ReCAPTCHA
                sitekey="6LfXuEIpAAAAAOuhIOnh-XVH0Q6bXSTG0RbJxzLv"
                onChange={handleRecaptchaChange}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Button variant="contained" sx={{ backgroundColor: '#6246ea', color: '#fffffe', width: 300 }} type='submit' form="formRegister" >Registrarme</Button>
            </Box>
        </>
    )
}

export default Register;