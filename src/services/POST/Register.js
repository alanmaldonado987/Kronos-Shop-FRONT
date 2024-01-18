import axios from 'axios';
import { URL_API } from '../../utils/URL_API';

export const registerPost = async (data) => {
    const response = await axios.post(`${URL_API}/auth/register`, data);

    return response;
}