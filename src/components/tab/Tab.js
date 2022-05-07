import { useState } from 'react'

import PropTypes, { string } from 'prop-types'

import styles from './Tab.module.scss'
import Container from '../common/Container'

function Tab() {
  const tabs = [
    { title: '감자', content: '감자는 감자튀김' },
    { title: '고구마', content: '고구마는 고구마맛탕' },
    { title: '카레라이스', content: '카레는 엄마카레' },
  ]

  const [tabIndex, setTabIndex] = useState(0)

  return (
    <Container title='TAB'>
      <>
        <Tabs list={tabs} tabIndex={tabIndex} onPress={setTabIndex} />
        <Content list={tabs} tabIndex={tabIndex} />
      </>
    </Container>
  )
}

function Tabs({ list, tabIndex, onPress }) {
  const text = list

  const tabList = text.map((tab, idx) => {
    const key = `tab-list-${idx}`
    const tabStyle = tabIndex === idx ? styles.tabActive : styles.tabInactive

    return (
      <li
        className={tabStyle}
        onClick={() => {
          onPress(idx)
        }}
        key={key}
        role='presentation'
      >
        {tab.title}
      </li>
    )
  })

  const sliderStyle = (idx) => {
    return {
      transform: `translateX(${idx * 150}px)`,
    }
  }

  return (
    <nav className={styles.tabContainer}>
      <ul className={styles.tabs}>{tabList}</ul>
      <div className={styles.tabSlider} style={sliderStyle(tabIndex)} />
    </nav>
  )
}

Tabs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(string)),
  tabIndex: PropTypes.number,
  onPress: PropTypes.func,
}

function Content({ list, tabIndex }) {
  const text = list

  return (
    <div className={styles.tabContentContainer}>
      <div className={styles.tabContent}>{text[tabIndex].content}</div>
    </div>
  )
}

Content.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(string)),
  tabIndex: PropTypes.number,
}

export default Tab
