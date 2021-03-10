 import { useState } from 'react';
import axios from 'axios'
import NewQuiz from './NewQuiz'
import SetQuestions from './SetQuestions';


let questionsegment = new Object();
let resid = 0;

const SetQuiz = () => {

    const[quizForm,setQuizForm] = useState(true)
    const[questions, setQuestions] = useState(false);
    const[responseid,setResponseId] = useState(0);

    
    

    /* set form defaults */
    // const clearquestionfields = () => {
    //     setquestiontext('');
    //     setexplanationtext('');
    //     setSingleOptionAnswer('');
    //     setMultipleanswerA('');
    //     setMultipleanswerB('');
    //     setMultipleanswerC('');
    //     setMultipleanswerD('');
    // }

    // const clearformfields = () => {
    //     setName('');
    //     setCategory('');
    //     setSubCategory('');
    //     setDescription('');
    //     setMarks('');
    //     setTimelimit('');
    //     setTotalQues(0);
        
    // }

    /* Quiz question set parameters */
    

    

    
    // const handlefinishbutton =() => {
    //     //console.log(questionsegment)
    //     questionsegment.quizid=responseid;
    //     console.log(responseid)
    //     console.log(questionsegment)
        
    //     const url = "https://credify.tk/addquestions";

    //     axios.post(url, questionsegment)
    //         .then(function (response){
    //             console.log(response.status);
    //             //console.log(JSON.stringify(response.data.user))
    //         })
    //         .catch(function(err){
    //             console.log("error message:",err.message);
    //         })
        
    //     alert('new quiz set added')
        
    //     setQuestions(false);
    //     setQuizForm(true);
    //     setQuesNo(1);
    // }

    // const addjson = (key,value) => {
    //     questionsegment[key] = value;
    //     //console.log(questionsegment)
    // }

    // const handleForm = (event) => {
        // event.preventDefault();

        // const quiz={
        //     name:name,
        //     category:category,
        //     subcategory:subCategory,
        //     description:description,
        //     timelimit:timelimit,
        //     marks:marks,
        //     total_questions:totalques

        // }
        // console.log(quiz);
        // const url = "https://credify.tk/addquiz";

        
        
        // axios.post(url, quiz)
        //     .then(function (response) {
        //         console.log(response.status);
        //         console.log((response.data.id))
        //         setResponseId(response.data.id);
        //         resid=response.data.id;
        //     })
        //     .catch(function (err) {
        //         console.log("error message", err.message);
        //     })
        
        // setTimeout(function () { 
        //     questionsegment.quizid = resid
        //     //console.log(responseid);
        //     console.log(resid);
        //     setQuestions(true)
        //     //clearformfields();
        //  }, (1000))
        
        //setQuizForm(true);
    // }

    // const handleques = (event) => {
          
        // const optiontype = qtype;

        // //console.log(questiontext,explanationtext,singleoptionanswer);

        //     if(optiontype==='single' && (quesno <= totalques)){
        //         addjson(quesno,{
        //             text:questiontext,
        //             explanation:explanationtext,
        //             question_type:qtype,
        //             choices:singleoptionanswer
        //         })

                
        //         clearquestionfields();
        //         if(quesno < totalques){
        //         setQuesNo(quesno+1);
        //         }


        //     }
        // if (optiontype === 'multiple' && (quesno <= totalques))

        //     {

        //     let correctA = document.querySelector(".iscorrect-A").checked
        //     let correctB = document.querySelector(".iscorrect-B").checked
        //     let correctC = document.querySelector(".iscorrect-C").checked
        //     let correctD = document.querySelector(".iscorrect-D").checked

        //         addjson(quesno,{
        //             text: questiontext,
        //             explanation: explanationtext,
        //             question_type: qtype,
        //             choices: [
        //                 {
        //                     text:multipleanswerA,
        //                     is_correct: correctA
        //                 },
        //                 {
        //                     text: multipleanswerB,
        //                     is_correct: correctB
        //                 },
        //                 {
        //                     text: multipleanswerC,
        //                     is_correct: correctC
        //                 },
        //                 {
        //                     text: multipleanswerD,
        //                     is_correct: correctD
        //                 }
        //             ]
        //         })


        //         clearquestionfields();
        //         if (quesno < totalques) {
        //         setQuesNo(quesno + 1);
        //     }
        //     }
        // //console.log(questionsegment);

    // }


    return ( 
        <div className="set-quiz container">
            <h2>Set the quiz</h2>
            {
                questions ? 
                    <SetQuestions /> 
                : quizForm ?   
                    <NewQuiz/>
                : ''
            } 
        </div>
    )
}
 
export default SetQuiz;