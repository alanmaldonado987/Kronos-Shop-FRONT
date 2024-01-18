import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logoRegister2 from "../assets/logoRegister2.png";
import { Link } from "react-router-dom";


const RegisterLandingPage = () => {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <Box className="registerContainer">
                <Box>
                    <img src={logoRegister2} className="registerIcon" />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2, mb: 2 }}>
                    <Typography
                        sx={{textAlign: 'center', color: 'black', fontWeight: 500 }}
                        variant="h5"
                    >
                        Para crear tu cuenta te pediremos algunos datos.
                    </Typography>
                    <Link to='/login' style={{textDecoration: 'none'}}>
                        <p style={{ color: '#e45858', fontWeight: 500 }}>
                            Ya tengo una cuenta.
                        </p>
                    </Link>
                    <Button variant="contained" className="registerButton" sx={{backgroundColor: '#6246ea', fontWeight: 700, width: 300 }}>
                        <Link to='/register' style={{textDecoration: 'none'}}>
                            <p style={{textAlign: 'center', fontWeight: 500, cursor: 'pointer', color: '#fffe' }} >Crear cuenta de Usuario</p>
                        </Link>
                    </Button>
                    <Button variant="contained"  className="registerButton" sx={{ backgroundColor: '#6246ea', fontWeight: 700, width: 300 }} disabled>
                        Crear cuenta de Administrador
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default RegisterLandingPage;
