import React from 'react'
import Feedbacklist from './Feedbacklist'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AdminFeedback = () => {

  const [isPending,setIsPending] = useState(true)

  const [feedbacks,setFeedbacks] = useState('')

  //useFetch and feedback details both are to be used with this

  const url = 'http://34.82.144.123/feedback'
  var options = {
    headers: {
      'Authorization': `TOKEN ${localStorage.getItem('token')}`
    }
  }

  useEffect(() => {
    axios.get(url,options)
      .then((response) => {
        console.log(response.data)
        setFeedbacks(response.data)
        setIsPending(false)
      })
      .catch((err) => (
        console.log(err.message)
      )
      )
  }, [url]
  )

  const fbdelete = (id) => {
    console.log('delete button clicked :', id)

    axios.delete('http://34.82.144.123/feedback', {
      data: {
        'feedbackid': id
      }
    },options).then((response) => (
      console.log(response.data))
    ).catch((e) =>
      (console.log(e.message)))

    const newblogs = feedbacks.filter((feedback) => feedback.id !== id)
    setFeedbacks(newblogs)

  }


  console.log('feedback', feedbacks)

  return (
    <div className="admin-feedback">
      {isPending && <div>Loading...</div>}
      {feedbacks && <Feedbacklist feedbacks={feedbacks} fbdelete={fbdelete}/>}


    </div>
  )
}

export default AdminFeedback