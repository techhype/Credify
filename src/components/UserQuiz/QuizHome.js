import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const QuizHome = () => {

        /*var tests = [
                {
                sno:1,
                topic:"GCP",
                totalQuestions:10,
                marks:20,
                timelimit:2
                 }
               
        ];*/
        
        const url = "https://credify.tk/getquiz";
        const [tests,setTests] = useState([]);


        useEffect( () => {
                axios.post(url, {
                        category: "GCP"
                })
                        .then(function (response) {
                                console.log(response.status);
                                console.log((response.data))
                                setTests(response.data);
                                console.log(tests);
                        })
                        .catch(function (err) {
                                console.log("error message", err.message);
                        })
                },[]

        )



        console.log(tests);

        return ( 
        <div className="Home container">
                <h2>All body parts are working</h2>
                
                        <table>
                                <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>sub Category</th>
                                        <th>Marks</th>
                                        <th>Time Limit</th>
                                        <th>Total Questions</th>
                                        <th>Start Test</th>
                                </tr>

                        {(tests.length == 0) ? (<div className="loading">loading quiz...</div> ) :

                        (tests.map((test) => (

                                <tr>
                                        <td>{test.id}</td>
                                        <td>{test.name}</td>
                                        <td>{test.subcategory}</td>
                                        <td>{test.marks}</td>
                                        <td>{test.timelimit}</td>
                                        <td>{test.total_questions}</td>
                                        <td><Link className="table-button"
                                                to={`/quiz/${test.id}`}
                                        >begin</Link></td>
                                </tr>

                        )))}
                         </table>       
        </div>
     );
}
 
export default QuizHome;