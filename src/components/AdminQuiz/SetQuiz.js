import { useState } from 'react';
import axios from 'axios'

let questionsegment = new Object();
let resid = 0;

const SetQuiz = () => {

    const[quizForm,setQuizForm] = useState(true)

    /* form inputs*/
    const[name,setName]= useState('');
    const[category,setCategory]=useState('GCP');
    const [subCategory, setSubCategory] = useState('');
    const [description, setDescription] = useState('');
    const [timelimit, setTimelimit] = useState('0');
    const [marks, setMarks] = useState('0');
    const [totalques, setTotalQues] = useState(0);
    const[questions, setQuestions] = useState(false);
    const[responseid,setResponseId] = useState(0);
    

    /* set form defaults */
    const clearquestionfields = () => {
        setquestiontext('');
        setexplanationtext('');
        setSingleOptionAnswer('');
        setMultipleanswerA('');
        setMultipleanswerB('');
        setMultipleanswerC('');
        setMultipleanswerD('');
    }

    const clearformfields = () => {
        setName('');
        setCategory('');
        setSubCategory('');
        setDescription('');
        setMarks('');
        setTimelimit('');
        setTotalQues(0);
        
    }

    /* Quiz question set parameters */
    const[questiontext,setquestiontext]=useState('')
    const [explanationtext, setexplanationtext] = useState('')
    const[qtype,setQType] = useState('single')
    const [quesno, setQuesNo] = useState(1);
    const[singleoptionanswer,setSingleOptionAnswer] = useState('')
    const [multipleanswerA, setMultipleanswerA] = useState('')
    const [multipleanswerB, setMultipleanswerB] = useState('')
    const [multipleanswerC, setMultipleanswerC] = useState('')
    const [multipleanswerD, setMultipleanswerD] = useState('')
    const[qaobject, setqaobject] = useState([]);

    /*GCP and AWS category */
    const GCPcategory = ['compute engine', 'app engine', 'cloud function']
    const AWScategory = ['instances', 'elastic beanstack', 'lambda functions']

    
    const handlefinishbutton =() => {
        //console.log(questionsegment)
        questionsegment.quizid=responseid;
        console.log(responseid)
        console.log(questionsegment)
        
        const url = "https://credifybe.tk/addquestions";

        axios.post(url, questionsegment)
            .then(function (response){
                console.log(response.status);
                //console.log(JSON.stringify(response.data.user))
            })
            .catch(function(err){
                console.log("error message:",err.message);
            })
        
        alert('new quiz set added')
        
        setQuestions(false);
        setQuizForm(true);
        setQuesNo(1);
    }

    const addjson = (key,value) => {
        questionsegment[key] = value;
        //console.log(questionsegment)
    }

    const handleForm = (event) => {
        event.preventDefault();

        const quiz={
            name:name,
            category:category,
            subcategory:subCategory,
            description:description,
            timelimit:timelimit,
            marks:marks,
            total_questions:totalques

        }
        console.log(quiz);
        const url = "https://credifybe.tk/addquiz";

        
        
        axios.post(url, quiz)
            .then(function (response) {
                console.log(response.status);
                console.log((response.data.id))
                setResponseId(response.data.id);
                resid=response.data.id;
            })
            .catch(function (err) {
                console.log("error message", err.message);
            })
        
        //console.log("funtion output",quiz);
        //console.log("total no of questions:",totalques,quesno);
        setTimeout(function () {
            
            questionsegment.quizid = resid
            //console.log(responseid);
            console.log(resid);
            setQuestions(true)
            //clearformfields();
         }, (1000))
        
        //setQuizForm(true);
    }

    const handleques = (event) => {

        

        //console.log('button works')

          
        const optiontype = qtype;

        //console.log(questiontext,explanationtext,singleoptionanswer);

            if(optiontype==='single' && (quesno <= totalques)){
                addjson(quesno,{
                    text:questiontext,
                    explanation:explanationtext,
                    question_type:qtype,
                    choices:singleoptionanswer
                })

                
                clearquestionfields();
                if(quesno < totalques){
                setQuesNo(quesno+1);
                }


            }
        if (optiontype === 'multiple' && (quesno <= totalques))

            {

            let correctA = document.querySelector(".iscorrect-A").checked
            let correctB = document.querySelector(".iscorrect-B").checked
            let correctC = document.querySelector(".iscorrect-C").checked
            let correctD = document.querySelector(".iscorrect-D").checked

                addjson(quesno,{
                    text: questiontext,
                    explanation: explanationtext,
                    question_type: qtype,
                    choices: [
                        {
                            text:multipleanswerA,
                            is_correct: correctA
                        },
                        {
                            text: multipleanswerB,
                            is_correct: correctB
                        },
                        {
                            text: multipleanswerC,
                            is_correct: correctC
                        },
                        {
                            text: multipleanswerD,
                            is_correct: correctD
                        }
                    ]
                })


                clearquestionfields();
                if (quesno < totalques) {
                setQuesNo(quesno + 1);
            }
            }
        //console.log(questionsegment);

    }


    return ( 
        <div className="set-quiz container">
            <h2>Set the quiz</h2>
             {questions ? (



                     <div className="set-questions question-container">
                    <div className="question-card">
                            <div className="set-question-heading">Set Questions {quesno}/{totalques}</div>

                            <div className="qa-block">
                                <input type="text" className="question-text"
                                
                                onChange={(e)=> setquestiontext(e.target.value)}
                                placeholder="Enter question"
                                value={questiontext}
                                />
                            <input type="text" className="explanation-text"
                                
                                onChange={(e) => setexplanationtext(e.target.value)}
                                placeholder="Enter answer explanation"
                                value={explanationtext}
                            />
                                <label className="option-type">answer type:</label>
                                <select 
                                className="qtype"
                                onChange={(e)=> setQType(e.target.value)}
                                value={qtype}
                                >
                                    <option value="single">Single option</option>
                                    <option value="multiple">multiple option</option>
                                </select>
                                {
                                    (qtype==="single") ? 
                                    (
                                        <div className="single-ans-container">
                                            <input type="text" className="single-ans"

                                                className="qtype"
                                                onChange={(e) => setSingleOptionAnswer(e.target.value)}
                                                value={singleoptionanswer}

                                            />
                                        </div>
                                        
                                    ) : (
                                        <div className="multiple-ans-container">
                                            <div className="ans-checks">
                                                <input type="checkbox" className="iscorrect-A" />
                                                <input type="text" className="multiple-answer-A" 
                                                placeholder="option A"
                                                onChange={(e) => setMultipleanswerA(e.target.value)}
                                                value={multipleanswerA}
                                                />
                                            </div>
                                            <div className="ans-checks">
                                                <input type="checkbox" className="iscorrect-B" />
                                                <input type="text" className="multiple-answer-B"
                                                    placeholder="option B"
                                                    onChange={(e) => setMultipleanswerB(e.target.value)}
                                                    value={multipleanswerB}
                                                />
                                            </div>
                                            <div className="ans-checks">
                                                <input type="checkbox" className="iscorrect-C" />
                                                <input type="text" className="multiple-answer-C"
                                                    placeholder="option C"
                                                    onChange={(e) => setMultipleanswerC(e.target.value)}
                                                    value={multipleanswerC}
                                                />
                                            </div>
                                            <div className="ans-checks">
                                                <input type="checkbox" className="iscorrect-D" />
                                                <input type="text" className="multiple-answer-D"
                                                    placeholder="option D"
                                                    onChange={(e) => setMultipleanswerD(e.target.value)}
                                                    value={multipleanswerD}
                                                />
                                            </div>
                                        </div>
                                        
                                    )
                                }
                                {(quesno>=totalques) ? (<div></div>) :
                                 (
                                    <button className="next-question-set"
                                        onClick={() => handleques()}
                                    >next
                                    </button>
                                 )}
                                
                                {(quesno>=totalques) ? (
                                        <button className="finishquestionset"
                                        onClick={
                                            () => {
                                                handleques();
                                                handlefinishbutton();
                                            }
                                        }
                                        >
                                            finish
                                        </button>
                                ) : (
                                    <></>
                                )}
                            </div>
                    </div>
                    
                     </div>



                 
             ) :

            ( quizForm ? 
            (<button className="quiz-form-button"
            onClick={() => setQuizForm(false)}
            >
                set a new quiz
            </button>) :
            (
                <form action="" className="set-quiz-form">
                    <div className="quiz-form-field">
                        <label className="form-label Name">Name</label>
                            <input type="text" className="form-inputs Name"
                            required
                            onChange = {(e)=> (setName(e.target.value))}
                            value={name}
                            />
                    </div>
                        <div className="quiz-form-field">
                            <label className="form-label Category">Category</label>
                            <select className="form-inputs Category" 
                                required
                                onChange={(e) => (setCategory(e.target.value))}
                                value={category}
                            >
                                <option value="GCP" >GCP</option>
                                <option value="AWS">AWS</option>
                            </select>
                        </div>
                        <div className="quiz-form-field">
                            <label className="form-label Sub-Category">Sub-Category</label>
                            <select className="form-inputs Sub-Category" 
                            required
                            onChange={(e) => (setSubCategory(e.target.value))}
                            value={subCategory}
                            >
                                {(category === 'GCP') ? (
                                        GCPcategory.map((categ) => (
                                            <option value={categ}>
                                                {categ}
                                            </option>
                                        ))
                                    ):
                                (
                                        AWScategory.map((categ) => (
                                            <option value={categ}>
                                                {categ}
                                            </option>
                                        ))
                                    )}
                                
                            </select>
                        </div>
                        <div className="quiz-form-field">
                            <label className="form-label Description">Description</label>
                            <textarea className="form-inputs Description" 
                                required
                                onChange={(e) => (setDescription(e.target.value))}
                                value={description}
                            >{description}</textarea>
                        </div>
                        <div className="quiz-form-field">
                            <label className="form-label Time-Limit">Time Limit</label>
                            <input type="text" className="form-inputs Time-Limit" 
                                required
                                onChange={(e) => (setTimelimit(e.target.value))}
                                value={timelimit}
                            />
                        </div>
                        <div className="quiz-form-field">
                            <label className="form-label Marks">Per Question Marks</label>
                            <input type="text" className="form-inputs Marks" 
                                required
                                onChange={(e) => (setMarks(e.target.value))}
                                value={marks}
                            />
                        </div>
                        <div className="quiz-form-field">
                            <label className="form-label Total-Ques">Total Questions</label>
                            <input 
                            type="number" id="quantity" name="quantity" min="1" max="5"
                            className="form-inputs Total-Ques" 
                                onChange={(e) => (setTotalQues(e.target.value))}
                                value={totalques}
                            />
                        </div>
                        <div className="quiz-form-field">
                            <button className="form-submit-button" onClick={handleForm}>Create</button>
                        </div>
                </form>
            )
            )
        }
        </div>
     );
}
 
export default SetQuiz;