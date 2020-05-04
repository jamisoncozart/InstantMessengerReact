import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import Messages from './Messages';

let App = props => {
  const firestore = useFirestore();

  const [input, setInput] = useState("");

  function addMessageToFirestore(event) {
    event.preventDefault();
    setInput("");
    return firestore.collection('messages').add({
      text: event.target.message.value,
      timeStamp: firestore.FieldValue.serverTimestamp()
    });
  }
  return(
    <React.Fragment>
      <Messages />
      <form onSubmit={addMessageToFirestore}>
        <input type="text" name="message" value={input} onChange={event => setInput(event.target.value)} />
        <button>Send</button>
      </form>
    </React.Fragment>
  )
}

App = connect()(App);

export default App;