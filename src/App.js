import './App.css';
import Header from './components/header/Header';
import MainFeed from './components/mainFeed/MainFeed';
import TopSwings from './components/topSwings/TopSwings';
import { useEffect } from 'react'
import About from './components/about/About';

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(u => {
      console.log(u)
    })
  }, [])


  return (
    <div className="App">
      <Header />
      <About />
      <MainFeed />
      <TopSwings />
    </div>
  );
}

export default App;
