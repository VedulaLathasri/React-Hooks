import logo from './logo.svg';
import './App.css';
import HookCounter from './useState/HookCounter';
import CounterWithPrevState from './useState/CounterWithPrevState';
import UseStateWithObject from './useState/UseStateWithObject';
import UseStateWithArrays from './useState/UseStateWithArrays';
import ClassCounterOne from './useEffect/ClassCounterOne';
import HookCounterOne from './useEffect/HookCounterOne';
import DataFetching from './useEffect/DataFetching';
import ComponentC from './useContext/ComponentC';
import React from 'react';
import CounterOne from './useReducer/CounterOne';
import ParentComponent from './useCallback/ParentComponent';
import Counter from './useMemo/Counter';
import CounterTwo from './useCounterCustomHook/CounterTwo';
import CounterOne from './useCounterCustomHook/CounterOne';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <CounterTwo/>
      <CounterOne/>
      {/* <Counter/> */}
      {/* <ParentComponent/> */}

      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={'Vishwas'}> 
        <ChannelContext.Provider value={'codevolition'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <HookCounterOne/> */}
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
