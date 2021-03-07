import React,{useState,useEffect} from 'react'
import PieChart from './PieChart'
import LevelBarChart from "./LevelBarChart";
import NameBarChart from './NameBarChart'
import { 
  getStats,
  gcpLevelNames,
  awsLevelNames,
  azureLevelNames,
  gcpCertNames, 
  awsCertNames, 
  azureCertNames 
} from '../../utils/stats';
import './AdminDashboard.css'

const AdminDashboard = () => {
  const [usersTotal,setUsersTotal] =useState('');
  const [certsTotal,setCertsTotal] =useState('');
  const [cspTotal,setCspTotal] = useState([]);
  const [CSP,setCSP] = useState('');
  const [gcpLevelTotal,setGcpLevelTotal] = useState([]);
  const [awsLevelTotal,setAwsLevelTotal] = useState([]);
  const [azureLevelTotal,setAzureLevelTotal] = useState([]);
  const [GCPCertNamesTotal,setGCPCertNamesTotal] = useState([]);  
  const [AWSCertNamesTotal,setAWSCertNamesTotal] = useState([]);
  const [AzureCertNamesTotal,setAzureCertNamesTotal] = useState([]);
  
  

  useEffect(()=>{
    getStats(
      setUsersTotal,
      setCertsTotal,
      setCspTotal,
      setGcpLevelTotal,
      setAwsLevelTotal,
      setAzureLevelTotal,
      setGCPCertNamesTotal,
      setAWSCertNamesTotal,
      setAzureCertNamesTotal
    );
  },[]);

  const onChangeCsp = (e) => {
    setCSP(e.target.value);
  }

  return (
    <>
    {/* <h1 style={{fontSize:'1.5em',marginTop:'10px',marginLeft:'20px'}}>Admin Dashboard</h1> */}
    <div className="top-section">
    <div className='inputCsp card' onChange={onChangeCsp}>
      <input type="radio" value="GCP" name="csp" id='gcp'/>
      <label htmlFor="gcp">GCP</label>
      <input type="radio" value="AWS" name="csp" id='aws' />
      <label htmlFor="aws">AWS</label>
      <input type="radio" value="Azure" name="csp" id='azure' />
      <label htmlFor="azure">Azure</label>
    </div>
      <div className="card dash-card">
        <PieChart cspTotal={cspTotal} style={{display:'block'}} />
      </div>
      <div className='total-section'>
        <div className="card total-card">Total Number of Users <br/> {usersTotal}</div>
        <div className="card total-card">Total Number of Certificates <br/>  {certsTotal}</div>
      </div>
    </div>
    <div className='bottom-section'>
      {
        CSP==='GCP' 
        ? (<div className="card dash-card">
            <LevelBarChart levelTotal={gcpLevelTotal} levelNames={gcpLevelNames} />
            </div>)
        : CSP==='AWS'
        ? (<div className="card dash-card">
          <LevelBarChart levelTotal={awsLevelTotal} levelNames={awsLevelNames} />
          </div>)
        : CSP==='Azure'
        ? (<div className="card dash-card">
          <LevelBarChart levelTotal={azureLevelTotal} levelNames={azureLevelNames} />
          </div>)
        :''
      }
      {  
        CSP==='GCP' 
        ? (<div className="card dash-card"><NameBarChart certNamesTotal={GCPCertNamesTotal} certNames={gcpCertNames} /></div>)
        : CSP==='AWS'
        ? (<div className="card dash-card"><NameBarChart certNamesTotal={AWSCertNamesTotal} certNames={awsCertNames} /></div>)
        : CSP==='Azure'
        ? (<div className="card dash-card"><NameBarChart certNamesTotal={AzureCertNamesTotal} certNames={azureCertNames} /></div>)
        :''
      }
    </div>
    </>
  );
}

export default AdminDashboard;