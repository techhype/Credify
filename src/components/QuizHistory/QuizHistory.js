import React,{useState,useEffect} from 'react'
import axios from 'axios'

const QuizHistory = () => {
  const [quizHistory,setQuizHistory] = useState([]);
  useEffect(()=>{
    getquizHistory();
  },[])
  const getquizHistory = () => {
    const url = "https://credify.tk/quizresults";
    var options = {
      headers: { 
          'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    }
    axios.get(url,options)
    .then(response=>{
      setQuizHistory(response.data)
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='container'>
      <h1>Quiz History</h1>
      {quizHistory.map(history=> (
        <div className='card card-3'>
          <h6>Quiz Name:{history.quiz.name}</h6>
          <h6>Quiz Category: {history.quiz.category}</h6>
          <h6>Quiz Sub-Category: {history.quiz.subcategory}</h6>
          <h6>Right Answers: {history.rightans_no}</h6>
          <h6>Wrong Answers: {history.wrongans_no}</h6>
          <h6>Score: {history.score} / {history.quiz.marks*history.quiz.total_questions}</h6>
          <a href={history.report_url} target="_blank">Quiz Report</a>
        </div>
      ))}
    </div>
  )
}

export default QuizHistory
