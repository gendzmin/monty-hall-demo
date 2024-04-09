/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import GamesHistory from './GamesHistory';

export default function Result(props) {
    const [history, setHistory] = React.useState([]);
    const [showHistory, setShowHistory] = React.useState(false);
    const { data } = props;
    const countResult = (prompt) => {
        return data.reduce((acc, i) => {
        if (prompt === 'wins') {
          return i ? acc + 1 : acc;
        }
        return i ? acc : acc + 1;
      }, 0);
    };
    
    const showResult = () => data.length === 0 ? '(no games played)' : `Wins: ${countResult('wins')} / Looses: ${countResult('losses')}`;
    
    React.useEffect(() => {
        console.log(history);
      setHistory((prev) => {
        if (history.length >= 1 && history[0] === '(no games played)') {
          prev.shift();
        }
        return [showResult(), ...prev.slice(0, 4)]
      });
    }, [data]);
    
    return (
    <div>
          <p className='result-el' id='result'>{showResult()}</p>
          <button id='history-button' onClick={ () => setShowHistory((prev) => !prev) }>History</button>
          <GamesHistory data={{history, showHistory}} />
        </div>
    );
};