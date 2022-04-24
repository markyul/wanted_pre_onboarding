import './App.css';

import Input from './components/input/Input';
import Tab from './components/tab/Tab';
import Toggle from './components/toggle/Toggle';
import Slider from './components/slider/Slider';
import Dropdown from './components/dropdown/Dropdown';

function App() {
  return (
    <div className='App'>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  );
}

export default App;
