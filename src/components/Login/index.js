import './index.css'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {Component} from 'react'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onLogin = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}

    const urlApi = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(urlApi, option)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="back-con">
        <h1>Please Login</h1>
        <button onClick={this.onLogin} type="button">
          Login with sample Creds
        </button>
      </div>
    )
  }
}

export default Login
