import './App.css';
import Header from './components/header/Header';
import MainFeed from './components/mainFeed/MainFeed';
import TopSwings from './components/topSwings/TopSwings';
import About from './components/about/About';
import 'semantic-ui-css/semantic.min.css'

function App() {

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
