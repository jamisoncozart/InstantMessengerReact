import React from 'react';

import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';


const Messages = props => {

  useFirestoreConnect([{ 
    collection: 'messages',
    orderBy: 'timeStamp' }]);
  const messages = useSelector(state => state.firestore.ordered.messages);
  if(isLoaded(messages)) {
    return(
      <React.Fragment>
        {messages.map((message, index) => <p key={index}>{message.text}</p>)}
      </React.Fragment>
    );
  } else {
    return(<p>Loading...</p>)
  }
}

export default Messages;