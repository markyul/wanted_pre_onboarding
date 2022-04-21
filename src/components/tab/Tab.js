import React, { useState } from 'react';

import './Tab.css';

const Tab = () => {
  const tabs = [
    { title: '감자', content: '감자는 감자튀김' },
    { title: '고구마', content: '고구마는 고구마맛탕' },
    { title: '카레라이스', content: '카레는 엄마카레' },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  const handleTab = (index) => {
    setTabIndex(index);
  };

  return (
    <div className='container'>
      <h1>TAB</h1>

      <nav className='tab-container'>
        <ul className='tabs'>
          {tabs.map((tab, idx) => {
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
          })}
        </ul>
        <div
          className='tab-slider'
          style={{ transform: `translateX(${tabIndex * 150}px)` }}
        />
      </nav>
      <div className='tab-content-container'>
        <div className='tab-content'>{tabs[tabIndex].content}</div>
      </div>
    </div>
  );
};

export default Tab;
