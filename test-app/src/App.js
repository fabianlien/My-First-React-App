import './App.css';
// eslint-disable-next-line
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// eslint-disable-next-line
import StatefulGreeting from './components/ClassGreeting';
// eslint-disable-next-line
import StatefulGreetingWithCallback from './components/ClassGreetingWithCallback';
// eslint-disable-next-line
import StatefulGreetingWithPrevState from './components/ClassGreetingWithPrevState';
// eslint-disable-next-line
import EventsClass from './components/EventsClass';
// eslint-disable-next-line
import EventsFunctional from './components/EventsFunctional';
// eslint-disable-next-line
import EventBinding from './components/EventBinding';
// eslint-disable-next-line
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// eslint-disable-next-line
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// eslint-disable-next-line
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';

function App() {
  return (
    <div className="App">
      {/*<FunctionalGreetingWithProps greeting="Nice to meet you!" name="Fabian" age="28"/>
      <StatefulGreeting greeting="This is a stateful class component" name="Fladrian"/>
      <StatefulGreetingWithCallback greeting="This is a stateful class component with callback"/>
      <StatefulGreetingWithPrevState greeting="This is a stateful class component with the previous state" />
      <EventsClass />
      <EventsFunctional />
      <EventBinding />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} />
      <NestingComponents />*/}
      <MethodsAsPropsParent />
    </div>
  );
}

export default App;
