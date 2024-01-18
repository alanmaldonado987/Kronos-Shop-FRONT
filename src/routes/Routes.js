import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterLandingPage from '../views/RegisterLandingPage';
import Login from '../views/Login';
import Register from "../views/Register";
import NotFound from '../views/NotFound';
import Home from '../views/auth/Home';
import PrivateRoutes from './PrivateRoutes';
import HomeAdmin from '../views/admin/HomeAdmin';
import Products from '../views/admin/Products';
import Users from '../views/admin/Users';
import Roles from '../views/admin/Roles';
import Dashboard from '../views/admin/Dashboard';
import SidaBar from '../components/SideBar/SidaBar';
import { useSelector } from 'react-redux';

const RoutesTree = () => {

    const { token, role } = useSelector(state => state.user);

    return (
        <Routes>
            {/* Rutas Publicas */}
            <Route path="/" element={<RegisterLandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            {/* Rutas Privadas (USER) */}
            <Route element={<PrivateRoutes hasAuthorization={!!token} />}>
                 <Route path='/home' element={<Home />} />
            </Route>

            {/* Rutas Privadas (ADMIN) */}
            <Route element={<PrivateRoutes hasAuthorization={!!token && role === 'admin'} />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/home" element={<HomeAdmin />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/roles" element={<Roles />} />
            </Route>
        </Routes>
    );
}

export default RoutesTree;
