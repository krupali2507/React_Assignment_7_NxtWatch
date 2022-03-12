import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    failedErrorMessage: '',
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = error => {
    this.setState({failedErrorMessage: error})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state

    console.log(usernameInput, passwordInput)

    const loginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: usernameInput,
      password: passwordInput,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()

    console.log(data)
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderLoginForm = () => {
    const {
      usernameInput,
      passwordInput,
      showPassword,
      failedErrorMessage,
    } = this.state

    const typeOfInput = showPassword ? 'text' : 'password'
    return (
      <form className="login-form-div" onSubmit={this.onSubmitLoginForm}>
        <label htmlFor="uname">USERNAME</label>
        <input
          type="text"
          id="uname"
          placeholder="Username"
          className="input-control"
          value={usernameInput}
          onChange={this.onChangeUsername}
        />
        <label htmlFor="pwd">PASSWORD</label>
        <input
          type={typeOfInput}
          id="pwd"
          placeholder="Password"
          className="input-control"
          value={passwordInput}
          onChange={this.onChangePassword}
        />
        <div>
          <input
            type="checkbox"
            id="show-pwd"
            onClick={this.onClickShowPassword}
          />
          <label htmlFor="show-pwd">Show Password</label>
        </div>
        <button type="submit" className="login-btn input-control">
          Login
        </button>
        <p className="error-msg">{failedErrorMessage}</p>
      </form>
    )
  }

  render() {
    return (
      <div className="login-bg-container">
        <div className="login-form-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="website-logo"
          />
          {this.renderLoginForm()}
        </div>
      </div>
    )
  }
}

export default LoginForm
