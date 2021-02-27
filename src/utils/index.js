import axios from 'axios'
const TOKEN_KEY = 'token';

// const getUser = async(token) => {
    
//     const url='https://credifybe.tk/user'
//     var options = {
//       headers: { 
//         'Authorization': `TOKEN ${token}` 
//       }
//     };
//     const response = await axios.get(url,options);
//     return response.status; 
    
// }

export const logout = () => {
    window.localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    const token = window.localStorage.getItem(TOKEN_KEY)
    // console.log(Promise.resolve(getUser(token)));
    
    if(token )                 
        return true;
    else
        return false;
}
