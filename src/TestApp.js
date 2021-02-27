

import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor', 'Alomgir','Salman Shah'];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name={nayoks[0]} food="fuska" nayika="Mousumii"></Person>
        <Person name="Bappa Raj" nayika="Bobita"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Heroo of {props.nayika}</h3>
  </div>
  )
}
export default App;
