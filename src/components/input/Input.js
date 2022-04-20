import React, { useState, useEffect } from 'react';

import './Input.css';
import validCheckBlack from '../../asset/check_black.png';
import validCheckColor from '../../asset/check_color.png';
import pwViewIcon from '../../asset/pw_view.png';
import pwHiddenIcon from '../../asset/pw_hidden.png';

const Input = () => {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  const [isValidID, setValidID] = useState(false);
  const [nowIsValidID, setNowValidID] = useState(true);

  const [pwView, setPwView] = useState(false);

  useEffect(() => {
    setValidID(getValid(ID, 'id'));
  }, [ID]);

  const onChangeID = (e) => {
    setID(e.target.value);
  };

  const onChangePW = (e) => {
    setPW(e.target.value);
  };

  const handleBlur = (isValid) => {
    if (!ID || isValid) {
      setNowValidID(true);
    } else {
      setNowValidID(false);
    }
  };

  const handlePwIcon = () => {
    pwView ? setPwView(false) : setPwView(true);
  };

  return (
    <div className='container'>
      <section className='content-container'>
        <h1 className='content-title'>LOGIN</h1>
        <div className='input-title'>E-mail</div>
        <div className='input-container'>
          <input
            className='input'
            placeholder='E-mail'
            value={ID}
            onChange={onChangeID}
            onBlur={() => handleBlur(isValidID)}
          />
          <img
            src={isValidID ? validCheckColor : validCheckBlack}
            className='input-icon'
            alt='check'
          />
        </div>
        {!ID || nowIsValidID ? null : (
          <div className='err-messege'>Invalid e-mail address</div>
        )}
        <div className='input-title'>Password</div>
        <div className='input-container'>
          <input
            className='input'
            placeholder='Password'
            type={pwView ? '' : 'password'}
            value={PW}
            onChange={onChangePW}
          />
          <img
            src={pwView ? pwViewIcon : pwHiddenIcon}
            className='password-icon'
            alt='check'
            onClick={handlePwIcon}
          />
        </div>
      </section>
    </div>
  );
};

const regex = {
  id: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const getValid = (text, type) => {
  return regex[type].test(text);
};

export default Input;
