import React, { useState } from 'react'
import Base from '../core/Base'
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
        return <p className="text-black">Redirect to admin</p>
      } else {
        return <p className="text-black">Redirect to user page</p>
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
      <div className='row mt-5 bg-secondary pt-5'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <form>
            <div className='form-group'>
              <label className='text-light'>Email</label>
              <input
                className='form-control'
                type='email'
                onChange={handleChange('email')}
                value={email}
              />
            </div>
            <div className='form-group'>
              <label className='text-light'>Password</label>
              <input
                className='form-control'
                type='password'
                value={password}
                onChange={handleChange('password')}
              />
            </div>
            <div class='d-grid gap-2 form-group'>
              <button
                onClick={onsubmit}
                class='btn btn-success m-5 '
                type='button'
              >
                Button
              </button>
            </div>
          </form>
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
      <p className='text-black text-center'>{JSON.stringify(values)}</p>
    </Base>
  )
}

export default Signin
