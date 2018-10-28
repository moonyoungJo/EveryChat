import React, {Component} from 'react';

import JoinUsForm from 'components/joinUs/JoinUsForm';

class JoinUsFormContainer extends Component{
  state = {
    id:'',
    password: '',
    email: '',
    sex: '',
    birth: '',
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
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }
  handleSexChange = (e) => {
    this.setState({
      sex: e.target.value,
    });
  }
  handleBirthChange = (e) => {
    this.setState({
      birth: e.target.value,
    });
  }
  render(){
    const {id, password, email, sex, birth} = this.state;
    const {handleIdChange, 
          handlePasswordChange, 
          handleEmailChange,
          handleSexChange,
          handleBirthChange} = this;
    console.log(sex);
    return(
      <JoinUsForm
        id={id}
        onIdChange={handleIdChange}
        password={password}
        onPasswordChange={handlePasswordChange}
        email={email}
        onEmailChange={handleEmailChange}
        sex={sex}
        onSexChange={handleSexChange}
        birth={birth}
        onBirthChange={handleBirthChange}
      />
    )
  }
}

export default JoinUsFormContainer;