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
      <Tabs list={tabs} idx={tabIndex} onTabPress={(v) => setTabIndex(v)} />
      <Content list={tabs} idx={tabIndex} />
    </Container>
  );
};

const Tabs = ({ ...props }) => {
  const handleTab = (index) => {
    props.onTabPress(index);
  };

  const tabList = props.list.map((tab, idx) => {
    return (
      <li
        className={props.idx == idx ? 'tab-active' : 'tab-inactive'}
        onClick={() => {
          handleTab(idx);
        }}
        key={idx}
      >
        {tab.title}
      </li>
    );
  });

  return (
    <nav className='tab-container'>
      <ul className='tabs'>{tabList}</ul>
      <div
        className='tab-slider'
        style={{ transform: `translateX(${props.idx * 150}px)` }}
      />
    </nav>
  );
};

const Content = ({ ...props }) => {
  return (
    <div className='tab-content-container'>
      <div className='tab-content'>{props.list[props.idx].content}</div>
    </div>
  );
};

export default Tab;
