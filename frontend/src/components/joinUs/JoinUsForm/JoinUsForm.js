import React from 'react';
import styles from './JoinUsForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const JoinUsForm = ({
  oAuth, 
  onKeyPress,
  id, 
  onIdChange,
  onIdCheck,
  password, 
  onPasswordChange,
  email,
  onEmailChange,
  onEmailCheck,
  sex,
  onSexChange,
  birth,
  onBirthChange,
  message, 
  onJoinUs,
}) => (
  <div className={cx('joinusForm')}> 
    <label className={cx('joinusForm-label')}>
      아이디 : 
    </label>
    <input autoFocus 
        type='text' 
        placeholder='id'
        id='id'
        value={id} 
        onChange={onIdChange} 
        onKeyPress={onKeyPress} 
        disabled={oAuth}
    />
    {
      oAuth
      ?(
        <span className={cx('joinusForm-oauth')}> [ {oAuth} ] </span>
      )
      :(
        <Button onClick={onIdCheck}>확인</Button>
      )
    }
    <br />

    <label className={cx('joinusForm-label')}>
      패스워드 : 
    </label>
    <input
      type='password' 
      placeholder='password' 
      id='password'
      value={password} 
      onChange={onPasswordChange} 
      onKeyPress={onKeyPress}
    /><br />

    <label className={cx('joinusForm-label')}>
      이메일 : 
    </label>
    <input 
      type='email'
      id='email'
      value={email}
      placeholder='email'
      onChange={onEmailChange}
      onKeyPress={onKeyPress}
    />
    <Button onClick={onEmailCheck}>확인</Button>
    <br />

    <div className={cx('joinusForm-sex')}>
      <label className={cx('joinusForm-label')}>
        성별 : 
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='radio' name='sex' id='male' value='male' checked={sex === 'male'} onChange={onSexChange}/>
      <label>남자</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='radio' name='sex' id='female' value='female' checked={sex === 'female'} onChange={onSexChange}/>
      <label>여자</label>
    </div>
    <br />
    
    <label className={cx('joinusForm-label')}>
        생일 : 
    </label>
    <input 
      type="date" 
      name='birth' 
      id='birth' 
      value={birth} 
      onChange={onBirthChange}/>
    <br />
    
    {
      message && (
        <div className={cx('joinusForm-message')}>
          [{message}]
        </div>
      )
    }

    <br />
    <div className={cx('joinusForm-buttons')}>
      <Button onClick={onJoinUs}>회원가입</Button>
      <Button to={'/'}>로그인 화면</Button>
    </div>
  </div>
);

export default JoinUsForm;