import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function Quiz() {
    const { id } = useParams();
    //console.log(id);

    /*const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ]
        }
    ];*/

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [startQuiz, setStartQuiz] = useState(true);
    
    const url = "https://credifybe.tk/getquestions";

    //console.log(id);
    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        axios.post(url, {
            "quizid": id
        })
            .then(function (response) {
                console.log(response.status);
                console.log((response.data))
                setQuestions(response.data)
            })
            .catch(function (err) {
                console.log("error message", err.message);
            })
    }, [startQuiz]

    )



    



    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        const prevQuestion = currentQuestion - 1;
        if(prevQuestion < 0){
            setCurrentQuestion(0);
        }
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
        setShowScore(true);
        }

    };
    return (
        <div className='app'>
            {
                startQuiz ? (<div className='instruction-section'>
                    <h2>Instructions to be fetched</h2>
                    <p className="instructions">                      
                        1. dont answer any questions &nbsp;
                        2. make sure to close your eyes
                    </p>
                    <button onClick={() => setStartQuiz(false)}>begin test</button>
                </div>):
            (showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (

                    ( questions.length <=0) ? (
                        <div className="loading">loading questions...
                        {questions.length}</div>
                    ) : (

                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].text}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].choices.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.is_correct)}>{answerOption.text}</button>
                            ))}
                        </div>
                    </>)
                ))}
        </div>
    );
}