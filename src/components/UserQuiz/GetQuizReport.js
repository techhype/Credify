import React,{useEffect,useState} from 'react'
import { createGlobalStyle } from 'styled-components';
import './GetQuizReport.css'

const GetQuizReport = (props) => {
  const questions = props.questions;
  const wrongSelected = props.wrongSelected;

  return (
    <div>
    {
      questions.map((question,i) =>{
      const wrongArray =  [false,false,false,false];
      if(wrongSelected[i]){
        if(wrongSelected[i].length===1){
          wrongArray[wrongSelected[i][0]]=true;
        }
        else if(wrongSelected[i].length===2){
          wrongArray[wrongSelected[i][0]]=true;
          wrongArray[wrongSelected[i][1]]=true;
        }
      }
      return(
        <div style={{marginTop:'30px'}} key={i}>
          <h4 style={{fontWeight:'bold'}}>Question {i+1}</h4>
          <h4 style={{fontWeight:'bold'}}>{question.text}</h4><br/>
          <h6 className={(question.choices[0].is_correct ? 'correct-answer' : "")}
          style={{backgroundColor:wrongArray[0]?'red':'white',fontSize:'20px'}}>a. {question.choices[0].text}</h6><br/>
          <h6 className={(question.choices[1].is_correct ? 'correct-answer' : "")}
          style={{backgroundColor:wrongArray[1]?'red':'white',fontSize:'20px'}}>b. {question.choices[1].text}</h6><br/>
          <h6 className={(question.choices[2].is_correct ? 'correct-answer' : "")}
          style={{backgroundColor:wrongArray[2]?'red':'white',fontSize:'20px'}}>c. {question.choices[2].text}</h6><br/>
          <h6 className={(question.choices[3].is_correct ? 'correct-answer' : "")}
          style={{backgroundColor:wrongArray[3]?'red':'white',fontSize:'20px'}}>d. {question.choices[3].text}</h6><br/>
          <h4 style={{fontWeight:'bold'}}>Explanation</h4><br/>
          <p style={{fontStyle:'italic',fontSize:'18px'}}>{question.explanation}</p><br/>
        </div>
      )
      })
    }
    </div>
  )
}

export default GetQuizReport
