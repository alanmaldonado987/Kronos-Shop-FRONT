import axios from 'axios';
import { URL_API } from '../../utils/URL_API';
import { GetToken } from '../../utils/GetToken';

export const getAllProducts = async () => {
  const response = await axios.get(`${URL_API}/products/getProducts`, {
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  })
  
  return response;
};
