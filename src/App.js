import './App.css';

function App() {
  return (
    <div id='container'>
      <h3>Monty Hall Game</h3>
      <p>This is a simple simulation of the Monty Hall paradox. Choose whether to switch doors and see if you win!</p>
      <div>
        <input type="checkbox"></input>
        <label>Change doors?</label>
      </div>
      <button>Start</button>
      <h5>Result</h5>
      <div></div>
    </div>
  );
}

export default App;
