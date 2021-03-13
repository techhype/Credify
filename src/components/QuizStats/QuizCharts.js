import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import RadarChart from './RadarChart';
import HorizontalBarChart from './HorizontalBarChart';
import {getQuizRank} from '../../utils/stats'
import './QuizCharts.css'
const QuizCharts = () => {
  const [quizStats,setQuizStats] = useState(''); 
  const [totalQuestions,setTotalQuestions] = useState(0)
  const [rank,setRank] = useState('');
  const {id} = useParams();
  useEffect(()=> {
    getQuizRank(id,setRank)
    const url = "https://credify.tk/adminquizstats";
    var options = {
      headers: { 
          'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    }
    axios
      .post(url,{"user__id":id},options)
      .then(function (response) {
        setQuizStats(response.data)
        let tq=0;
        for(let val of response.data){
          tq+=val.total_questions;
        }
        setTotalQuestions(tq)
      })
      .catch(function (err) {
        console.log("error message", err.message);
      });
  },[])
  return (
    <div>
      {quizStats ?(
        <>
          <div className='container quiz-stats-container'>
            <div className='left'>
              <div className='card'>
                <RadarChart stats={quizStats}/>
              </div>
              <div className='card'>
                <HorizontalBarChart stats={quizStats} />
              </div>
            </div>
            <div className='right'>
              <div className='card'>
                Number of Quizzes attended <br/><h4>{quizStats.length}</h4>
              </div>
              <div className='card'>
                Number of Questions attended <br/><h4>{totalQuestions}</h4>
              </div>
              <div className='card rank'>
                Quiz Rankings Position <br/>{rank ? <h4>{rank}</h4> : <h4>NIL</h4>}
              </div>
              <div className='card title'>
                Credify Quiz
              </div>
            </div>
          </div>
        </>
      ) : 
       <div className='container'>Loading Stats....</div>
      }
    </div>
  )
}

export default QuizCharts
