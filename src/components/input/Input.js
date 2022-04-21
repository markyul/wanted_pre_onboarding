import React, { useState, useEffect } from 'react';

import './Input.css';
import validCheckBlack from '../../asset/check_black.png';
import validCheckColor from '../../asset/check_color.png';
import pwViewIcon from '../../asset/pw_view.png';
import pwHiddenIcon from '../../asset/pw_hidden.png';

const Input = () => {
  return (
    <div className='container'>
      <h1>INPUT</h1>
      <section className='input-container'>
        <InputID />
        <InputPW />
      </section>
    </div>
  );
};

const InputID = () => {
  const [ID, setID] = useState('');

  const [isValidID, setValidID] = useState(false);
  const [nowIsValidID, setNowValidID] = useState(true);

  useEffect(() => {
    setValidID(getValid(ID, 'id'));
  }, [ID]);

  const onChangeID = (e) => {
    setID(e.target.value);
  };

  const handleBlur = (isValid) => {
    if (!ID || isValid) {
      setNowValidID(true);
    } else {
      setNowValidID(false);
    }
  };

  return (
    <section className='input-box'>
      <div className='input-title'>E-mail</div>
      <div className='id-input-box'>
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
    </section>
  );
};

const InputPW = () => {
  const [PW, setPW] = useState('');

  const [pwView, setPwView] = useState(false);

  const onChangePW = (e) => {
    setPW(e.target.value);
  };

  const handlePwIcon = () => {
    pwView ? setPwView(false) : setPwView(true);
  };

  return (
    <section className='input-box'>
      <div className='input-title'>Password</div>
      <div className='pw-input-box'>
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
  );
};

const regex = {
  id: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const getValid = (text, type) => {
  return regex[type].test(text);
};

export default Input;
