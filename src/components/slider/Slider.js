import React, { useState } from 'react';

import './Slider.css';
import Container from '../common/Container';

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <Container title='SLIDER'>
      <div className='slider-container'>
        <Panel value={sliderValue} />
        <SlideBar value={sliderValue} onChange={(v) => setSliderValue(v)} />
      </div>
    </Container>
  );
};

const Panel = ({ value }) => {
  return (
    <div className='panel-container'>
      <div className='panel-left-container'>{value}</div>
      <div className='panel-right-container'>%</div>
    </div>
  );
};

const SlideBar = ({ value, onChange }) => {
  const values = [0, 25, 50, 75, 100];

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const valueBtns = values.map((v) => {
    return (
      <ValueBtn
        value={v}
        onPress={(v) => {
          onChange(v);
        }}
      />
    );
  });

  return (
    <div className='slide-bar-container'>
      <input
        className='range-slider'
        type='range'
        min='0'
        max='100'
        value={value}
        onChange={handleChange}
      />
      <div className='slider-btn-container'>{valueBtns}</div>
    </div>
  );
};

const ValueBtn = ({ value, onPress }) => {
  const handleClick = (v) => {
    onPress(v);
  };
  return (
    <div
      className='slider-btn'
      onClick={() => {
        handleClick(value);
      }}
    >
      {value}%
    </div>
  );
};

export default Slider;
