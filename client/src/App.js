import './App.scss';
import Header from './components/Header';
import Prompts from './components/Prompts';
import Timer from './components/Timer';
import Dosage from './components/Dosage';
import StartButton from './components/StartButton';
import Water from './components/Water';
import Navbar from './components/Navbar';
import { ReactComponent as Brewer } from './components/images/brewer.svg';


function App() {
  return (
  <div>
    <Header />
    <div className='instructions'>
      <Prompts />
      <Timer />
    </div>
    <div className='brewer'>
      <Brewer />
    </div>
    <div className='controls'>
      <Dosage />
      <StartButton />
      <Water />
    </div>
    <Navbar />
  </div>
    );
}

export default App;
