import * as XLSX from 'xlsx';

import axios from 'axios';

const convertToObject = (arr) => {
  var result = {};
  for (let i = 0; i < arr.length; i++) {
    result[i+1] = arr[i];
  }
  return result;
}
    


export const readExcelFile = (event) => {
  console.log(event.target.files[0]);
  const file =  event.target.files[0];
  const promise = new Promise((resolve,reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = e.target.result;

      const workbook = XLSX.read(bufferArray,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      resolve(data);
    }

    fileReader.onerror = (error)=>{
      reject(error);
    }
  })  

  promise.then((data)=>{
    // console.log(data);
    const dataArray= data.map((qa,i)=>{
      let iscorrectArray = [false,false,false,false];
      if(qa.Type==='Single'){
        const index = qa["Answer Option"];
        iscorrectArray[index-1]=true;
      }
      else{
        const multiple = qa["Answer Option"].split(',');
        let j;
        for(j of multiple){
          const index = Number(j);
          iscorrectArray[index-1]=true;
        }
      }
      return (
          {
          'text':qa.Question,
          'explanation':qa.Explanation,
          'question_type':qa.Type.toLowerCase(),
          'choices':[
            {
              'text':qa['Choice 1'],
              'is_correct':iscorrectArray[0]                
            },
            {
              'text':qa['Choice 2'],
              'is_correct':iscorrectArray[1]
            },
            {
              'text':qa['Choice 3'],
              'is_correct':iscorrectArray[2]
            },
            {
              'text':qa['Choice 4'],
              'is_correct':iscorrectArray[3]
            }
          ]
        }
    )
    })
    const Questions_Data = {...convertToObject(dataArray),'quizid':2};
    console.log(Questions_Data);

    const url = "https://credifybe.tk/addquestions"; 
    var options = {
      headers: { 
        'Authorization': `TOKEN ${window.localStorage.getItem('token')}`
      }
    };
    axios.post(url,Questions_Data,options)
    .then(response => {
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    })
    
    
  })
  
}
