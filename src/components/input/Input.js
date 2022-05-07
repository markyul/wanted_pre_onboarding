import { useState, useEffect } from 'react'

import styles from './Input.module.scss'
import Container from '../common/Container'
import validCheckBlack from '../../asset/check_black.png'
import validCheckColor from '../../asset/check_color.png'
import pwViewIcon from '../../asset/pw_view.png'
import pwHiddenIcon from '../../asset/pw_hidden.png'

const regex = {
  id: /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const getValid = (text, type) => {
  return regex[type].test(text)
}

function Input() {
  return (
    <Container title='INPUT'>
      <section className={styles.inputContainer}>
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

  const iconSrc = isValidID ? validCheckColor : validCheckBlack

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
    <section className={styles.inputBox}>
      <div className={styles.inputTitle}>E-mail</div>
      <div className={styles.idInputBox}>
        <input
          className={styles.input}
          placeholder='E-mail'
          value={ID}
          onChange={onChangeID}
          onBlur={() => handleBlur(isValidID)}
        />
        <img src={iconSrc} className={styles.idInputIcon} alt='check' />
      </div>
      {ID && !nowIsValidID && <div className={styles.errMessege}>Invalid e-mail address</div>}
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
    <section className={styles.inputBox}>
      <div className={styles.inputTitle}>Password</div>
      <div className={styles.pwInputBox}>
        <input
          className={styles.input}
          placeholder='Password'
          type={!pwView && 'password'}
          value={PW}
          onChange={onChangePW}
        />
        <img
          src={pwView ? pwViewIcon : pwHiddenIcon}
          className={styles.passwordIcon}
          alt='check'
          onClick={handlePwIcon}
          role='presentation'
        />
      </div>
    </section>
  )
}

export default Input
