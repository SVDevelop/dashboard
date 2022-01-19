
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {Month} from './components/month'
import {Card} from './components/card'
import './App.css';

const getRandomColor = () => new Array(3).fill(0).map(() => ~~(Math.random() * 255) ).join(', ')
// console.log(getRandomColor())

function App() {
  let date = new Date()
  const [year, month] = [date.getFullYear(), date.getMonth()]
  console.log(getRandomColor())
  return (
    <div className="App">
      {new Array(12).fill(null).map((_, month) => <Month year={year} month={month} color={getRandomColor}/>)}
    </div>
  );
}

export default App;
