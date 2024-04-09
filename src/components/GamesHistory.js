
export default function GamesHistory(props) {
    const { history, showHistory } = props.data;
    return (
      <div className={`history-container ${showHistory ? 'history-active' : ''}`}>
        <ul>
          {history.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    );
}  