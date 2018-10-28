import React from 'react';
import classNames from 'classnames/bind';
import styles from './JoinUsTemplate.scss';

const cx = classNames.bind(styles);

const JoinUsTemplate = ({joinUsForm}) => (
  <div>
    <div className={cx('joinus-background')}></div>
    <div className={cx('joinus-wrapper')}>
      <div className={cx('joinus-title')}>회원가입</div>
        {joinUsForm}
    </div>
  </div>
);

export default JoinUsTemplate;