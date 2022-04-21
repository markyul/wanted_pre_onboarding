import React, { useState } from 'react';

import './Tab.css';
import Container from '../common/Container';

const Tab = () => {
  const tabs = [
    { title: '감자', content: '감자는 감자튀김' },
    { title: '고구마', content: '고구마는 고구마맛탕' },
    { title: '카레라이스', content: '카레는 엄마카레' },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container title='TAB'>
      <Tabs list={tabs} tabIndex={tabIndex} onPress={(v) => setTabIndex(v)} />
      <Content list={tabs} tabIndex={tabIndex} />
    </Container>
  );
};

const Tabs = ({ list, tabIndex, onPress }) => {
  const handleTab = (idx) => {
    onPress(idx);
  };

  const tabList = list.map((tab, idx) => {
    return (
      <li
        className={tabIndex == idx ? 'tab-active' : 'tab-inactive'}
        onClick={() => {
          handleTab(idx);
        }}
        key={idx}
      >
        {tab.title}
      </li>
    );
  });

  const sliderStyle = (idx) => {
    return {
      transform: `translateX(${idx * 150}px)`,
    };
  };

  return (
    <nav className='tab-container'>
      <ul className='tabs'>{tabList}</ul>
      <div className='tab-slider' style={sliderStyle(tabIndex)} />
    </nav>
  );
};

const Content = ({ list, tabIndex }) => {
  return (
    <div className='tab-content-container'>
      <div className='tab-content'>{list[tabIndex].content}</div>
    </div>
  );
};

export default Tab;
