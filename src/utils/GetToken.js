export const GetToken = () =>{
    
    const token = localStorage.getItem('JwtToken');

    if(!token) return "";

    return token;
}

export function saveToken(token, role) {
  localStorage.setItem('JwtToken', token);
  localStorage.setItem('role', role);
}
