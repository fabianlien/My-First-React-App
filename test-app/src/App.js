import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/ClassGreeting';
import StatefulGreetingWithCallback from './components/ClassGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/ClassGreetingWithPrevState';

function App() {
  return (
    <div className="App">
     <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Fabian" age="28"/>
     <StatefulGreeting greeting="This is a stateful class component" name="Fladrian"/>
     <StatefulGreetingWithCallback greeting="This is a stateful class component with callback"/>
     <StatefulGreetingWithPrevState greeting="This is a statedul class component with the previous state" />
    </div>
  );
}

export default App;
