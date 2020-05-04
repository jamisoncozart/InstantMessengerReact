import React, { useState } from 'react';

const App = props => {

  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);

  function handleFormSubmission(event) {
    event.preventDefault();
    setMessage("");
    setHistory([...history, event.target.message.value]);
  }

  return(
    <React.Fragment>
      <div className="chat">
        {history.map(message => (
          <p>{message}</p>
        ))}
      </div>
      <form onSubmit={handleFormSubmission}>
        <input type="text" name="message" value={message} onChange={event => setMessage(event.target.value)} />
        <button>Send</button>
      </form>
    </React.Fragment>
  )
}

export default App;