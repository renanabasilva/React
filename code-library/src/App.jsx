import './App.css'

import Character from "./components/solid/DependencyInversionPrinciple"
import NavBar from "./components/nav-bar"
import Slides from './components/slides'
import SortNumbersAndDates from './components/sortNumberAndDates'

function App() {
  return (
    <>
      <NavBar/>
      <Slides />
      <SortNumbersAndDates />
      <Character />
    </>
  )
}

export default App
