import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
     <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Fabian" age="28"/>
    </div>
  );
}

export default App;
