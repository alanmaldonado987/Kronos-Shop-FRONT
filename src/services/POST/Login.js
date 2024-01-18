import axios from 'axios';
import { URL_API } from '../../utils/URL_API';
import { GetToken } from '../../utils/GetToken';

export const loginPost = async (data) => {
  const response = await axios.post(`${URL_API}/auth/login`, data, {
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  })
  
  return response;
};
