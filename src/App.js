import React from 'react';
import "./App.css";
import AboutMe from './components/AboutMe';
import MyCity from './components/MyCity';
const App = () => {
  const [state, setState] = React.useState(true)
  return (
    <div className="div-class">
      <br/>
      <button className="button-class button1" onClick={() => setState(true)}> About Me </button>
      <button className="button-class button2" onClick={() => setState(false)}> My Town </button>
      <br /> <br />
      {state === true ? <AboutMe /> : <MyCity /> }      </div>    )}
export default App;

