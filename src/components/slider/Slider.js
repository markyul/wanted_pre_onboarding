import { useState } from 'react'

import PropTypes from 'prop-types'

import styles from './Slider.module.scss'
import Container from '../common/Container'

function Slider() {
  const [sliderValue, setSliderValue] = useState(0)

  return (
    <Container title='SLIDER'>
      <div className={styles.sliderContainer}>
        <Panel value={sliderValue} />
        <SlideBar value={sliderValue} onChange={setSliderValue} />
      </div>
    </Container>
  )
}

function Panel({ value }) {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.panelLeftContainer}>{value}</div>
      <div className={styles.panelRightContainer}>%</div>
    </div>
  )
}

Panel.propTypes = {
  value: PropTypes.number,
}

function SlideBar({ value, onChange }) {
  const values = [0, 25, 50, 75, 100]

  const handleChange = (e) => {
    onChange(parseInt(e.target.value, 10))
  }

  const valueBtns = values.map((v, idx) => {
    const key = `value-btn-${idx}`

    return <ValueBtn key={key} value={v} onPress={onChange} />
  })

  return (
    <div className={styles.slideBarContainer}>
      <input className={styles.rangeSlider} type='range' min='0' max='100' value={value} onChange={handleChange} />
      <div className={styles.sliderBtnContainer}>{valueBtns}</div>
    </div>
  )
}

SlideBar.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}

function ValueBtn({ value, onPress }) {
  const handleClick = (v) => {
    onPress(v)
  }
  return (
    <div
      className={styles.sliderBtn}
      onClick={() => {
        handleClick(value)
      }}
      role='presentation'
    >
      {value}%
    </div>
  )
}

ValueBtn.propTypes = {
  value: PropTypes.number,
  onPress: PropTypes.func,
}

export default Slider
