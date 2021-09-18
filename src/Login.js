import React from 'react';
import Classes from './Login.module.css';
class Login extends React.Component {
  onKeyChange = (username) => {
    var emailCheck = /^[A-Za-z0-9_.]{3,}@[A-Za-z]{3,}[.]{1,}[A-Za-z]{2,}$/;
    if (emailCheck.test(username)) {
      //console.log('email is valid');
      document.getElementById('emailError').innerHTML = '';
      return true;
    } else {
      //alert('Email is not valid!');
      document.getElementById('emailError').innerHTML =
        '** Email can contain _ . only';
        setTimeout(()=>{
            document.getElementById('emailError').innerHTML = '';
        },2000)
      return false;
    }
  };
  onPasswordChange = (password) => {
    var passwordcheck = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/;
    if (passwordcheck.test(password)) {
      //console.log('password is valid');
      document.getElementById('passError').innerHTML = '';
      return true;
    } else {
      //alert('Password is not valid!');
      document.getElementById('passError').innerHTML =
        '** Password should contain atleast one Capital letter, small letter, number with minimum 8 length';
        setTimeout(()=>{
            document.getElementById('passError').innerHTML = '';
        },2000)
      return false;
    }
  };

  onSubmitClick = (e) => {
    e.preventDefault();
    var email = this.onKeyChange(e.target[0].value);
    var pass = this.onPasswordChange(e.target[1].value);
    if(email && pass){
        alert('Login Successful')
    }
  };
  render() {
    return (
      <div className={Classes.div}>
        <form
          className={Classes.formWrapper}
          onSubmit={(e) => {
            return this.onSubmitClick(e);
          }}
        >
          <h1>Login</h1>
          <input type="text" placeholder="Email" required />
          <h6 className={Classes.error} id="emailError"></h6>
          <input type="password" placeholder="password" required />
          <h6 className={Classes.error} id="passError"></h6>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Login;
