const TOKEN_KEY = 'token'

// const getUser = async(token) => {

//     const url='http://35.232.17.192/user'
//     var options = {
//       headers: {
//         'Authorization': `TOKEN ${token}`
//       }
//     };
//     const response = await axios.get(url,options);
//     return response.status;

// }

export const isAdmin = () => {
  const user = window.localStorage.getItem('user')
  const token = window.localStorage.getItem(TOKEN_KEY)
  if(token && user==='admin')
    return true
  return false
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN_KEY)
  window.localStorage.removeItem('user')
}

export const isLogin = () => {
  const token = window.localStorage.getItem(TOKEN_KEY)
  // console.log(Promise.resolve(getUser(token)));

  if(token )
    return true

  return false
}

