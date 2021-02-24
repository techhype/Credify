import React,{useState} from 'react'


const CustomSelect = (props) => {

  const [cspselected, setCSPSelected] = useState("");
  const [levelselected,setLevelSelected] = useState("");
  
  const handleCSPSelect = ({target}) => {
    setCSPSelected(target.value);
  }
  const handleLevelSelect = ({target}) => {
    setLevelSelected(target.value);
  }
  
  const handleCertDetails = ({target}) => {
    props.setCert(cspselected,levelselected,target.value);
  }

  // GCP
  const GCP = {
    Associate : ["Associate Cloud Engineer"],
    Professional : [
      "Professional Cloud Architect", 
      "Professional Cloud Developer", 
      "Professional Data Engineer",
      "Professional Cloud DevOps Engineer",
      "Professional Cloud Security Engineer",
      "Professional Cloud Network Engineer",
      "Professional Collaboration Engineer",
      "Professional Machine Learning Engineer"
    ]
  }
  
  // AWS
  const AWS = {
    Foundational : ["AWS Certified Cloud Practitioner"],
    Associate : [ 
      "AWS Certified Developer",
      "AWS Certified SysOps Administrator",
      "AWS Certified Solutions Architect"
    ],
    Professional : [
      "AWS Certified DevOps Engineer",
      "AWS Certified Solutions Architect"
    ],
    Specialty : [
      "AWS Certified Advanced Networking",
      "AWS Certified Security",
      "AWS Certified Machine Learning",
      "AWS Certified Database",
      "AWS Certified Data Analytics",
      "AWS Certified Alexa Skill Builder"
    ]
  }


  const Azure = {
    Fundamentals : [ 
      "Certified: Azure",
      "Microsoft Certified: Azure AI", 
      "Microsoft Certified: Azure Data"
    ],
    Professional : [
      "Microsoft Certified Azure Administrator", 
      "Microsoft Certified: Azure Developer", 
      "Microsoft Certified: Azure Security Engineer", 
      "Microsoft Certified: Azure AI Engineer", 
      "Microsoft Certified: Azure Data Scientist", 
      "Microsoft Certified: Azure Data Engineer", 
      "Microsoft Certified: Azure Database Administrator" 
    ],
    Expert : [
      "Microsoft Certified Solutions Architect", 
      "Microsoft Certified: Azure DevOps Engineer"  
    ]
  }
  let csp = null;
  let level = null;

  let certnames = null; 
  let certlevels = null; 

  if (cspselected === "GCP") { 
    csp = GCP; 
  } else if (cspselected === "AWS") { 
    csp = AWS; 
  } else if (cspselected === "Azure") { 
    csp = Azure; 
  } 
  
  if(csp){
    certlevels= Object.keys(csp).map((el) => <option key={el}>{el}</option>);
  }
  
  if(cspselected==="GCP" && levelselected==='Associate'){
    level=GCP.Associate;
  }
  else if(cspselected==="GCP" && levelselected==='Professional'){
    level=GCP.Professional;
  }
  else if(cspselected==="AWS" && levelselected==='Foundational'){
    level=AWS.Foundational;
  }
  else if(cspselected==="AWS" && levelselected==='Associate'){
    level=AWS.Associate;
  }
  else if(cspselected==="AWS" && levelselected==='Professional'){
    level=AWS.Professional;
  }
  else if(cspselected==="AWS" && levelselected==='Specialty'){
    level=AWS.Specialty;
  }
  else if(cspselected==="Azure" && levelselected==='Fundamentals'){
    level=Azure.Fundamentals;
  }
  else if(cspselected==="Azure" && levelselected==='Professional'){
    level=Azure.Professional;
  }
  else if(cspselected==="Azure" && levelselected==='Expert'){
    level=Azure.Expert;
  }

  // console.log(level);

  if (level) { 
    certnames = level.map((el) => <option key={el}>{el}</option>); 
  } 

  return (
    <div>
        <div>  
          <select onChange={handleCSPSelect}> 
            <option defaultValue value> -- select an option -- </option>
            <option>GCP</option> 
            <option>AWS</option> 
            <option>Azure</option> 
          </select> 
        </div> 
        <div> 
          <select onChange={handleLevelSelect}> 
          <option defaultValue value> -- select an option -- </option>
            { 
              certlevels 
            } 
          </select> 
        </div> 
        <div> 
          <select onChange={handleCertDetails}> 
          <option defaultValue value> -- select an option -- </option>
            { 
              certnames 
            } 
          </select> 
        </div> 
    </div> 
  );
}

export default CustomSelect;