import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Login from './Login'

describe('App', () => {
  /*test('renders App component', () => {
        const container =render(<Search />);

        //screen.getByText('Click');
    });*/

  /* Function testing */
  test('renders App component', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>)



    //fireEvent.click(screen.getByTestId('Click'));

    //screen.debug();

    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'credifyadmin@gma' },
    })

    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'credifyadm' },
    })


    fireEvent.click(screen.getByTestId('submitBtn'))


    // expect(onChange).toHaveBeenCalledTimes(1);
    setTimeout(() => {
      screen.debug()
      expect(screen.getByText('Email : Enter a valid email address.')).toBeInTheDocument()
    }, 1000)


  })



})