import { useState, useEffect } from 'react'

import './Input.css'
import Container from '../common/Container'
import validCheckBlack from '../../asset/check_black.png'
import validCheckColor from '../../asset/check_color.png'
import pwViewIcon from '../../asset/pw_view.png'
import pwHiddenIcon from '../../asset/pw_hidden.png'

const regex = {
  id: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const getValid = (text, type) => {
  return regex[type].test(text)
}

function Input() {
  return (
    <Container title='INPUT'>
      <section className='input-container'>
        <InputID />
        <InputPW />
      </section>
    </Container>
  )
}

function InputID() {
  const [ID, setID] = useState('')

  const [isValidID, setValidID] = useState(false)
  const [nowIsValidID, setNowValidID] = useState(true)

  useEffect(() => {
    setValidID(getValid(ID, 'id'))
  }, [ID])

  useEffect(() => {
    isValidID && setNowValidID(true)
  }, [isValidID])

  const onChangeID = (e) => {
    setID(e.target.value)
  }

  const handleBlur = (isValid) => {
    if (!ID || isValid) {
      setNowValidID(true)
    } else {
      setNowValidID(false)
    }
  }

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
        <img src={isValidID ? validCheckColor : validCheckBlack} className='input-icon' alt='check' />
      </div>
      {ID && !nowIsValidID && <div className='err-messege'>Invalid e-mail address</div>}
    </section>
  )
}

function InputPW() {
  const [PW, setPW] = useState('')

  const [pwView, setPwView] = useState(false)

  const onChangePW = (e) => {
    setPW(e.target.value)
  }

  const handlePwIcon = () => {
    setPwView(!pwView)
  }

  return (
    <section className='input-box'>
      <div className='input-title'>Password</div>
      <div className='pw-input-box'>
        <input className='input' placeholder='Password' type={!pwView && 'password'} value={PW} onChange={onChangePW} />
        <img
          src={pwView ? pwViewIcon : pwHiddenIcon}
          className='password-icon'
          alt='check'
          onClick={handlePwIcon}
          // 일단 해놓음
          role='presentation'
        />
      </div>
    </section>
  )
}

export default Input
