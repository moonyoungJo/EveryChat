import React from 'react';

import LoginTemplate from 'components/login/LoginTemplate'
import LoginForm from 'components/login/LoginForm';

//accountLogin 만들것!
const LoginPage = () => {
  return (
    <LoginTemplate 
      loginForm={<LoginForm />}
    />
  )
}

export default LoginPage;