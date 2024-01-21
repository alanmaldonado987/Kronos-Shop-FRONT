import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useNavigate } from "react-router-dom";

import "../../styles/components/appBar.scss";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const SidaBar = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [direction, setDirection] = React.useState(false);

    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex',}} > 
            <CssBaseline />
            <Drawer variant="permanent" open={open} PaperProps={{sx: {background: '#2b2c34', color: 'white'}}} >
                <DrawerHeader>
                    <IconButton onClick={()=>{
                        setOpen(!open)
                        setDirection(!direction)
                    }}>
                        {direction ? <ChevronRightIcon sx={{color: 'white'}} /> : <ChevronLeftIcon sx={{color: 'white'}} />}
                    </IconButton>
                </DrawerHeader>
                <Divider sx={{background: 'white'}} />
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            '&:hover': {
                                        backgroundColor: '#3a3b45', // Personaliza el color de fondo en hover
                            },
                        }}
                        onClick={() => navigate('/admin/home')}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <HomeOutlinedIcon sx={{color: '#e45858'}} />
                        </ListItemIcon>
                        <ListItemText primary={"Inicio"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            '&:hover': {
                                        backgroundColor: '#3a3b45', 
                            },
                        }}
                        onClick={() => navigate('/admin/products')}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <ProductionQuantityLimitsIcon sx={{color: '#e45858'}} />
                        </ListItemIcon>
                        <ListItemText primary={"Productos"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            '&:hover': {
                                        backgroundColor: '#3a3b45', 
                            },
                        }}
                        onClick={() => navigate('/admin/users')}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <PersonIcon sx={{color: '#e45858'}} />
                        </ListItemIcon>
                        <ListItemText primary={"Usuarios"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            '&:hover': {
                                        backgroundColor: '#3a3b45', 
                            },
                        }}
                        onClick={() => navigate('/admin/roles')}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <ManageAccountsIcon sx={{color: '#e45858'}} />
                        </ListItemIcon>
                        <ListItemText primary={"Roles"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                </ListItem>
                <Divider sx={{background: 'white'}} />
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            '&:hover': {
                                        backgroundColor: '#3a3b45',
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <SettingsIcon sx={{color: '#e45858'}}  />
                        </ListItemIcon>
                        <ListItemText primary={"Ajustes"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            </Drawer>
            <Box component="main">
                <DrawerHeader />

            </Box>
        </Box>
    );
}

export default SidaBar