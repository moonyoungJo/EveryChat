import React from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const LoginForm = ({id, onIdChange, onKeyPress, password, onPasswordChange, onLogin, onJoinUs}) => (
  <div className={cx('loginForm')}> 
    <div className={cx('loginForm-text')}>
      아이디
    </div>
    <div className={cx('loginForm-center')}>
      <input autoFocus 
        type='text' 
        placeholder='id'
        value={id} 
        onChange={onIdChange} 
        onKeyPress={onKeyPress} 
      />
    </div>
    <div className={cx('loginForm-text')}>
      비밀번호
    </div>
    <div className={cx('loginForm-center')}>
      <input autoFocus 
        type='password' 
        placeholder='password' 
        value={password} 
        onChange={onPasswordChange} 
        onKeyPress={onKeyPress}
      />
    </div>
    <div className={cx('loginForm-buttons')}>
      <Button onClick={onLogin}>로그인</Button>
      <Button onClick={onJoinUs}>회원가입</Button>
    </div>
  </div>
);

export default LoginForm;