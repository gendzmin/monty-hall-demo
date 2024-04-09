import Result from './components/Result';
import './styles/App.css';
import React from 'react';

  const doors = [
    {id: 0, chosen: false, prize: false },
    {id: 1, chosen: false, prize: false },
    {id: 2, chosen: false, prize: false },
  ];
  const getRandomDoorId = () => (Math.floor(Math.random() * doors.length));

function App() {
  const [changeDoors, setChangeDoors] = React.useState(false);
  const [result, setResult] = React.useState([]);

  const handleChangeDoors = () => setChangeDoors(!changeDoors);

  const handleClickStart = () => {
    const results = [];
    for (let i = 10; i > 0; i -= 1) {
      const currentDoors = doors.map((door) => ({ ...door }));
      const indexPrizeDoor = getRandomDoorId();
      const indexChosenDoor = getRandomDoorId();
      currentDoors[indexPrizeDoor].prize = true;
      currentDoors[indexChosenDoor].chosen = true;
      const availableDoors = currentDoors.filter(({ id, chosen, prize }) => chosen === false && prize === false);
      const toBeOpenedDoor = availableDoors[Math.floor(Math.random() * availableDoors.length)];
      const remainingDoors = currentDoors.filter(({ id }) => id !== toBeOpenedDoor.id);
      const thisResult = changeDoors ? remainingDoors[0].chosen !== remainingDoors[0].prize : remainingDoors[0].chosen === remainingDoors[0].prize;
      results.push(thisResult); 
    }
    setResult(results);
  };

  return (
    <div id='container'>
      <h3>Monty Hall Game</h3>
      <p>This is a simple simulation of the Monty Hall paradox. Choose whether to switch doors and see if you win!</p>
      <div className="checkbox-container">
        <input type="checkbox" name="changeDoors" id="changeDoors" value="selected" onChange={ () => handleChangeDoors() }></input>
        <label htmlFor="changeDoors">Change doors?</label>
      </div>
      <button id='start' onClick={ () => handleClickStart() }>Start</button>
      <h5>Result</h5>
      <Result data={result}/>
    </div>
  );
}

export default App;
