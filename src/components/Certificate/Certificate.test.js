import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Certificate from './Certificate'

test('renders certificates',() => {
  const gcpCerts = [{
    id:1,
    level:'Associate',
    certid:'fzrhtt',
    csp:'GCP',
    certname: 'Google Cloud Associate Developer',
    expiry_date: '2021-12-12',
    certified_date: '2020-12-20',
    sbu:'SBU 1',
    pdf_url: 'https://storage.googleapis.com/certificate_pdf/pdf/akishore@virtusa.comcavbzx.pdf',
    user: { id:1,name:'testuser',email:'testuser@xyzcompany.com',empid:'982736dd',user_type:'nuser' }
  }]

  const awsCerts = [{
    id:1,
    level:'Professional',
    certid:'rz12ftt',
    csp:'AWS',
    certname: 'Certified Devops Engineer',
    expiry_date: '2021-12-12',
    certified_date: '2020-12-20',
    sbu:'SBU 2',
    pdf_url: 'https://storage.googleapis.com/certificate_pdf/pdf/akishore@virtusa.comcavbzx.pdf',
    user: { id:2,name:'testuser',email:'testuser2@xyzcompany.com',empid:'182736dd',user_type:'nuser' }
  }]
  const azureCerts = [{
    id:1,
    level:'Professional',
    certid:'rz12ftt',
    csp:'AWS',
    certname: 'Certified Devops Engineer',
    expiry_date: '2021-12-12',
    certified_date: '2020-12-20',
    sbu:'SBU 2',
    pdf_url: 'https://storage.googleapis.com/certificate_pdf/pdf/akishore@virtusa.comcavbzx.pdf',
    user: { id:2,name:'testuser',email:'testuser2@xyzcompany.com',empid:'182736dd',user_type:'nuser' }
  }]

  const gcpComponent = render(
    <Certificate certs={gcpCerts} />
  )
  const awsComponent = render(
    <Certificate certs={awsCerts} />
  )
  const azureComponent = render(
    <Certificate certs={azureCerts} />
  )


  expect(gcpComponent.container).toHaveTextContent(
    'fzrhtt'
  )
  expect(awsComponent.container).toHaveTextContent(
    'rz12ftt'
  )
  expect(azureComponent.container).toHaveTextContent(
    'rz12ftt'
  )

})