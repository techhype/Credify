import axios from 'axios'

export const deleteCertificate = (certid) => {
  const url = 'http://34.82.144.123/sendmail'
  axios.delete(url,{ headers:{ 'Authorization': `TOKEN ${localStorage.getItem('token')}` },data:{ certid } })
    .then(response => {
      console.log(response.data)
      window.location.reload()
    })
    .catch(function (error) {
      console.log(error.response.status,error.response)
    })
}


export const deleteUser = (userid) => {
  const url = 'http://34.82.144.123/sendmail'
  axios.delete(url,{ headers:{ 'Authorization': `TOKEN ${localStorage.getItem('token')}` },data:{ userid } })
    .then(response => {
      console.log(response.data)
      window.location.reload()
    })
    .catch(function (error) {
      console.log(error.response.status,error.response)
    })
}