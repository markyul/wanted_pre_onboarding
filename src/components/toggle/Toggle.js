import { useState } from 'react'

import PropTypes, { string } from 'prop-types'

import styles from './Toggle.module.scss'
import Container from '../common/Container'

function Toggle() {
  const toggles = [
    { title: '기본', content: '김학률' },
    { title: '상세', content: '파릇파릇 신입 개발자!' },
  ]

  const [toggleIndex, setToggleIndex] = useState(0)

  return (
    <Container title='TOGGLE'>
      <>
        <ToggleBtn list={toggles} toggleIndex={toggleIndex} onPress={setToggleIndex} />
        <Content list={toggles} toggleIndex={toggleIndex} />
      </>
    </Container>
  )
}

function ToggleBtn({ list, toggleIndex, onPress }) {
  const toggleList = list.map((toggle, idx) => {
    const key = `toggle-list-${idx}`
    const toggleBtnStyle = toggleIndex === idx ? styles.toggleActive : styles.toggleInactive

    return (
      <li
        className={toggleBtnStyle}
        onClick={() => {
          onPress(idx)
        }}
        key={key}
        role='presentation'
      >
        {toggle.title}
      </li>
    )
  })

  const activeStyle = (idx) => {
    return {
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: '150px',
      height: '40px',
      fontWeight: 'bold',
      background: 'white',
      borderRadius: '30px',
      transform: `translateX(${idx * 150}px)`,
      transition: 'all 0.2s',
    }
  }

  return (
    <nav className={styles.toggleContainer}>
      <ul className={styles.toggle}>
        <div style={activeStyle(toggleIndex)} />
        {toggleList}
      </ul>
    </nav>
  )
}

ToggleBtn.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(string)),
  toggleIndex: PropTypes.number,
  onPress: PropTypes.func,
}

function Content({ list, toggleIndex }) {
  return (
    <div className={styles.toggleContentContainer}>
      <div className={styles.toggleContent}>{list[toggleIndex].content}</div>
    </div>
  )
}

Content.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(string)),
  toggleIndex: PropTypes.number,
}

export default Toggle
