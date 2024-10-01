import logo from './logo.svg';
import './App.css';
import HookCounter from './useState/HookCounter';
import CounterWithPrevState from './useState/CounterWithPrevState';
import UseStateWithObject from './useState/UseStateWithObject';
import UseStateWithArrays from './useState/UseStateWithArrays';

function App() {
  return (
    <div className="App">
      <UseStateWithArrays/>
      {/* <UseStateWithObject/> */}
      {/* <CounterWithPrevState/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
