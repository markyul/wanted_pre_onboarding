import React, { useState } from 'react';

import './Toggle.css';
import Container from '../common/Container';

const Toggle = () => {
  const toggles = [
    { title: '기본', content: '김학률' },
    { title: '상세', content: '파릇파릇 신입 개발자!' },
  ];

  const [toggleIndex, setToggleIndex] = useState(0);

  return (
    <Container title='TOGGLE'>
      <ToggleBtn
        list={toggles}
        toggleIndex={toggleIndex}
        onPress={setToggleIndex}
      />
      <Content list={toggles} toggleIndex={toggleIndex} />
    </Container>
  );
};

const ToggleBtn = ({ list, toggleIndex, onPress }) => {
  const toggleList = list.map((toggle, idx) => {
    return (
      <li
        className={toggleIndex === idx ? 'toggle-active' : 'toggle-inactive'}
        onClick={() => {
          onPress(idx);
        }}
        key={idx}
      >
        {toggle.title}
      </li>
    );
  });

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
    };
  };

  return (
    <nav className='toggle-container'>
      <ul className='toggle'>
        <div style={activeStyle(toggleIndex)} />
        {toggleList}
      </ul>
    </nav>
  );
};

const Content = ({ list, toggleIndex }) => {
  return (
    <div className='toggle-content-container'>
      <div className='toggle-content'>{list[toggleIndex].content}</div>
    </div>
  );
};

export default Toggle;
