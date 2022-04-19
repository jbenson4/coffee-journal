import './App.css';
import Header from './components/Header';
import Prompts from './components/Prompts';
import Timer from './components/Timer';
import Dosage from './components/Dosage';
import StartButton from './components/StartButton';
import Water from './components/Water';
import Navbar from './components/Navbar';

function App() {
  return (
  <div>
    <Header />
    <Prompts />
    <Timer />
    <Dosage />
    <StartButton />
    <Water />
    <Navbar />
  </div>
    );
}

export default App;
