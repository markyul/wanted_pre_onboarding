import './App.scss'

import Input from './components/input/Input'
import Tab from './components/tab/Tab'
import Toggle from './components/toggle/Toggle'
import Slider from './components/slider/Slider'
import Dropdown from './components/dropdown/Dropdown'

function App() {
  return (
    <div className='app'>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
