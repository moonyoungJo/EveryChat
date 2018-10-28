import React from 'react';

import LoginTemplate from 'components/login/LoginTemplate'
import LoginFormContainer from 'containers/login/LoginFormContainer';

//accountLogin 만들것!
const LoginPage = () => {
  return (
    <LoginTemplate 
      loginForm={<LoginFormContainer />}
    />
  )
}

export default LoginPage;