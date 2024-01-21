import axios from 'axios';
import { URL_API } from '../../utils/URL_API';
import { GetToken } from '../../utils/GetToken';

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${URL_API}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${GetToken()}`,
    },
  })
  
  return response;
};
