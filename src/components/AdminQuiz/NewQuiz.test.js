import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import axios from 'axios'

import NewQuiz from './NewQuiz'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('changes value when clicked', () => {
  //const onChange = jest.fn();
  act(() => {
    render(<NewQuiz />, container)
  })


  let res =null,status = null
  const quizDetails = {
    name: 'new name',
    category: 'GCP',
    subcategory: 'Cloud Storage',
    description: 'the new test',
    timelimit: 10,
    marks: 2,
    total_questions: 10,
  }
  const url = 'http://34.82.144.123/addquiz'

  axios.post(url, quizDetails)
    .then(function (response) {
      res= response
      status = response.status
    })

  {status && expect(status).toBe('200')}
  {res && expect(res).toBe(quizDetails) }


})