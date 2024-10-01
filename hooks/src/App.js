import logo from './logo.svg';
import './App.css';
import HookCounter from './useState/HookCounter';
import CounterWithPrevState from './useState/CounterWithPrevState';
import UseStateWithObject from './useState/UseStateWithObject';
import UseStateWithArrays from './useState/UseStateWithArrays';
import ClassCounterOne from './useEffect/ClassCounterOne';
import HookCounterOne from './useEffect/HookCounterOne';

function App() {
  return (
    <div className="App">
      <HookCounterOne/>
      {/* <ClassCounterOne/> */}
      {/* <UseStateWithArrays/> */}
      {/* <UseStateWithObject/> */}
      {/* <CounterWithPrevState/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
