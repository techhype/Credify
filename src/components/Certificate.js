import react from 'react';
import '../css/profile.css'

const Certificate= (props) => {
  const difDate = (d2) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const date1 =new Date(`${yyyy}/${mm}/${dd}`);
    const date2 = new Date(d2);
    console.log(date1,date2);
    const diffTime = date2 - date1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  }
  
  const {certs} = props;
  console.log(certs);
  if(certs.length>0){
    return(
        certs.map((cert,i)=>{
          return(
              <div key={i} className='certcard'>
                <h3>{cert.certname}</h3>
                <p>Cloud Service Provider:{cert.csp}</p>
                <p>Certification ID:{cert.certid}</p>
                <p>Expiry Date:{cert.expiry_date}</p>
                {difDate(cert.expiry_date)>1 ? 
                  <p>Ends in: {difDate(cert.expiry_date)} days</p>
                  :<p style={{color:'red'}}>Expired</p>}
                <a href={cert.pdf_url} target="_blank">View</a>
              </div>
          )
        })
    
    );

  }
  else{
    return (<h3>No certificates yet</h3>)
  }

}

export default Certificate;