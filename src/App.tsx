import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Aboutme from './components/aboutme/Aboutme'
import { useState } from 'react'
import Projects from './components/projects/Projects';

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <Aboutme />
      case 1:
        return <Projects />
      case 2:
        return <div>Education</div>
      case 3:
        return <div>Work history</div>
      default:
        return <Aboutme />
    }
  }

  return (
    <div className="app">
      <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      {renderContent()}
    </div>
  )
}

export default App
