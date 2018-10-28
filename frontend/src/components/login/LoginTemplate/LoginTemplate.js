import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoginTemplate.scss';

import LoginForm from 'components/login/LoginForm';

const cx = classNames.bind(styles);

const LoginTemplate = ({loginForm, anotherAccountLogin}) => (
  <div>
    <div className={cx('login-background')}></div>
    <div className={cx('login-wrapper')}>
      <div className={cx('login-title')}>Every Chat</div>
      {loginForm}
      <hr />
      여기에 카카오 로그인을 넣을거에요
      {anotherAccountLogin}
    </div>
  </div>
);

export default LoginTemplate;