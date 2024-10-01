import logo from './logo.svg';
import './App.css';
import HookCounter from './useState/HookCounter';
import CounterWithPrevState from './useState/CounterWithPrevState';
import UseStateWithObject from './useState/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <UseStateWithObject/>
      {/* <CounterWithPrevState/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
