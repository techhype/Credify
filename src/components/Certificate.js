import react from 'react';
import '../css/profile.css'

import '../css/card.css'
import GCP from '../img/GCP.png'
import AWS from '../img/AWS.png'
import Azure from '../img/Azure.png'

const Certificate= (props) => {
  console.log('Certifcates.js props:',props);
  const difDate = (d2) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const date1 =new Date(`${yyyy}/${mm}/${dd}`);
    const date2 = new Date(d2);
    const diffTime = date2 - date1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  }
  const {certs} = props;
  console.log(certs);
  if(certs.length>0){
    return(
        certs.map((cert,i)=>{
          console.log(cert.csp);
          return(
              <div key={i} className="c-card">
                <div className="card-img" >
                  { cert.csp==='GCP' ?
                  <img src="https://www.credify.tk/static/media/GCP.1985723b.png" alt="Google Cloud Platform" />
                    : cert.csp==='AWS' ?
                  <img src="https://www.credify.tk/static/media/AWS.6409eb93.png" alt="Amazon Web Services" />
                    :
                  <img src="https://www.credify.tk/static/media/Azure.81bf95e5.png" alt="Microsoft Azure" />
                  }
                </div>
                <div className="card-body">
                  <div className="card-title">{cert.certname}</div>
                  <div className="card-intro">{cert.csp}</div>
                  <div className="card-intro">Certification ID : {cert.certid}</div>
                  <div className="card-intro">Expiry Date : {cert.expiry_date}</div>
                  { difDate(cert.expiry_date) ?
                    <div className="card-intro">Ends in : {difDate(cert.expiry_date)} days</div>
                    :
                    <div className="card-intro" style={{color:'red'}}>Expired</div>

                  }
                </div>
                <div className='card-btn'>
                  <a target="_blank" style={{textDecoration:'none',fontSize:'18px'}} href={cert.pdf_url} className='submit'>View</a>  
                </div>
              </div>
          )
        })
    
    );

  }
  else{
    return (
    <>
    <div className="c-card">
      <div className="card-img skeleton"></div>
      <div className="card-body">
        <div className="card-title skeleton"></div>
        <div className="card-intro skeleton"></div>
        <div className='card-sbtn skeleton'></div>
      </div>
    </div>
    <div className="c-card">
      <div className="card-img skeleton"></div>
      <div className="card-body">
        <div className="card-title skeleton"></div>
        <div className="card-intro skeleton"></div>
        <div className='card-sbtn skeleton'></div>
      </div>
    </div>
    <div className="c-card">
      <div className="card-img skeleton"></div>
      <div className="card-body">
        <div className="card-title skeleton"></div>
        <div className="card-intro skeleton"></div>
        <div className='card-sbtn skeleton'></div>
      </div>
    </div>
    <div className="c-card">
      <div className="card-img skeleton"></div>
      <div className="card-body">
        <div className="card-title skeleton"></div>
        <div className="card-intro skeleton"></div>
        <div className='card-sbtn skeleton'></div>
      </div>
    </div>
    
    </>
    )
  }

}

export default Certificate;