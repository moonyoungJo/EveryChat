import React, {Component} from 'react';

import LoginForm from 'components/login/LoginForm';

class LoginFormContainer extends Component{
  state = {
    id:'',
    password: '',
  }
  handleIdChange = (e) => {
    this.setState({
      id: e.target.value,
    });
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }
  render(){
    const {id, password} = this.props;
    const {handleIdChange, handlePasswordChange} = this;
    return(
      <LoginForm 
        id={id}
        onIdChange={handleIdChange}
        password={password}
        onPasswordChange={handlePasswordChange}
      />
    )
  }
}

export default LoginFormContainer;