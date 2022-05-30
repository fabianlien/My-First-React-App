import './App.css';
//import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
//import StatefulGreeting from './components/ClassGreeting';
//import StatefulGreetingWithCallback from './components/ClassGreetingWithCallback';
//import StatefulGreetingWithPrevState from './components/ClassGreetingWithPrevState';
//import EventsClass from './components/EventsClass';
//import EventsFunctional from './components/EventsFunctional';
//import EventBinding from './components/EventBinding';
//import ConditionalRenderingClass from './components/ConditionalRenderingClass';
//import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
//import MethodsAsPropsParent from './components/MethodsAsPropsParent';
//import RenderingLists from './components/RenderingLists';
//import LifeCyclesCDM from './components/LifeCyclesCDM';
//import LifeCyclesCDU from './components/LifeCyclesCDU';
//import LifeCyclesCWU from './components/LifeCyclesCWU';
//import ControlledForm from './components/ControlledForm';
//import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';

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
      <NestingComponents />
      <MethodsAsPropsParent />
      <RenderingLists />
      <LifeCyclesCDM />
      <LifeCyclesCDU />
      <LifeCyclesCWU />
      <ControlledForm />
      <UncontrolledForm />*/}
      <SearchBar />
    </div>
  );
}

export default App;
