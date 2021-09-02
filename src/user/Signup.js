import React, { useState } from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { signup } from '../auth/helper'
import background from './img.jpg'
import { FormGroup } from 'react-bootstrap'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  })
  //values.email
  const { name, email, password, error, success } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false })
    //console.log(name, email, password)
    //signup request
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true,
          })
        }
      })
      .catch(console.log('Error in signup'))
  }

  const signupForm = () => {
    return (
      //<div className='' style={{ backgroundImage: `url(${background})`, marginLeft: 300} }>
      <div class='row'>
      <div class='col-md-4'>
      <FormGroup>
      <div className='form-group' style={{marginTop: 80}}>
          <form>    
          <h3 className='text-dark text-center'>Register Form</h3>
            <div className='form-group'>
              <label className='text-dark'>Name</label>
              <input
                className='form-control'
                onChange={handleChange('name')}
                type='text'
                value={name}
              />
            </div>
            <br></br>
              <label className='text-dark'>Email</label>
              <input
                className='form-control'
                onChange={handleChange('email')}
                type='email'
                value={email}
              />
            <br></br>
            <div className='form-group'>
              <label className='text-dark'>Password</label>
              <input
                className='form-control'
                onChange={handleChange('password')}
                type='password'
                value={password}
              />
            </div>
            <br></br>
            <div class='d-grid gap-2 form-group'>
              <button
                onClick={onSubmit}
                class='btn btn-success m-5 rounded '
                type='button'
              >
                Register
              </button>
            </div>
            
          </form>
          </div>
      </FormGroup>
      </div>
      <div class='col-md-7'>
        <img src={background}  
            width='2000'
            height='1000'
             class='bd-placeholder-img-lg img-fluid ' 
            style={{marginTop: 110, marginLeft: 80}}
            />
      </div>
    </div>










      

    )
  }
  const sucessMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-success'
            style={{ display: success ? '' : 'none' }}
          >
            New account is created. Please <Link to='/signin'>Signin</Link>
          </div>
        </div>
      </div>
    )
  }
  const errorMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className='alert alert-danger'
            style={{ display: error ? '' : 'none' }}
          >
            {error}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Base title='Signup Page' description='A page for user to signup'>
      {errorMessage()}
      {sucessMessage()}
      {signupForm()}
      {/* <p className='text-white text-center'>{JSON.stringify(values)}</p> */}
    </Base>
  )
}

export default Signup
