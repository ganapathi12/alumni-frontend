import React, { useState } from 'react'
import Base from '../core/Base'
import background from './img1.jpg'
import { FormGroup } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '../auth/helper'

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false,
  })

  const { email, password, error, loading, didRedirect } = values
  const { user } = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const onsubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true })
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false })
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            })
          })
        }
      })
      .catch((err) => {
        console.log('signin Failed')
      })
  }

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/user/dashboard" />
      }
    }
    // if (isAuthenticated()) {
    //   return <Redirect to='/' />
    // }
  }

  const loadingMessage = () => {
    return (
      loading && (
        <div className='alert alert-info'>
          <h2>Loading....</h2>
        </div>
      )
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

  const signinForm = () => {
    return (
      <div class='row'>
      <div class='col-md-4'>
      <FormGroup>
      <div className='form-group' style={{marginTop: 80}}> 
      <form>
        <h3 className='text-dark text-center'>Login </h3>
            <div className='form-group'>
              <label className='text-dark'>Email</label>
              <input
                className='form-control'
                type='email'
                onChange={handleChange('email')}
                value={email}
              />
            </div>
            <br></br>
            <div className='form-group'>
              <label className='text-dark'>Password</label>
              <input
                className='form-control'
                type='password'
                value={password}
                onChange={handleChange('password')}
              />
            </div>
            <br></br>
            <div class='d-grid gap-2 form-group'>
              <button
                onClick={onsubmit}
                class='btn btn-success m-5 '
                type='button'
              >
                Submit
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
            style={{marginTop: 65, marginLeft: 80}}
            />
      </div>
    </div>
    )
  }
  return (
    <Base title='Signin Page' description='A page for user to signin'>
      {loadingMessage()}
      {errorMessage()}
      {signinForm()}
      {performRedirect()}
      {/* <p className='text-black text-center'>{JSON.stringify(values)}</p> */}
    </Base>
  )
}

export default Signin
