import { useState } from 'react'
import './App.css'
import { Header, Content, Footer } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
