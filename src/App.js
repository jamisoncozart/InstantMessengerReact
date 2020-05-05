import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import Messages from './Messages';
import Signin from './Signin';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <Messages />
          <form onSubmit={addMessageToFirestore}>
            <input type="text" name="message" value={input} onChange={event => setInput(event.target.value)} />
            <button>Send</button>
          </form>
        </Route>
        </Switch>
    </Router>
  )
}

App = connect()(App);

export default App;