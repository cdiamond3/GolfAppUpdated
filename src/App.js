import './App.css';
import Header from './components/header/Header';
import MainFeed from './components/mainFeed/MainFeed';
import TopSwings from './components/topSwings/TopSwings';
import About from './components/about/About';
import 'semantic-ui-css/semantic.min.css';
import {useEffect, useState} from 'react';

function App() {

  const [myProfile, setMyProfile] = useState({})

  useEffect(() => {
    localStorage.getItem("token")
      .then(result =>
        fetch("http://localhost:3000/profile", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${result}`
          },
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data.comments)
            console.log(data)
            setMyProfile(data)
          })
      
  }, [])

  return (
    <div className="App">
      <Header myProfile={myProfile}/>
      <About />
      <MainFeed />
      <TopSwings />
    </div>
  );
}

export default App;
