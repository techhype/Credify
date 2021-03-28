import React from 'react'
import QuizHome from '../UserQuiz/QuizHome'
import axios from 'axios'

const ListQuiz = () => {

  const deleteQuiz = (quizid) => {
    const url = 'http://34.82.144.123/deletequiz'
    axios.delete(url,{ headers:{ 'Authorization': `TOKEN ${localStorage.getItem('token')}` },data:{ quizid } })
      .then(response => {
        console.log(response)
        alert('Quiz Deleted')
        window.location.reload()
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <QuizHome deleteQuiz={deleteQuiz}/>
  )
}

export default ListQuiz
