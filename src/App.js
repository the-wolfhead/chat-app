import React from 'react';
import './App.css';
import ChatRoom from './chat/chatRoom';
import SignIn from './nav/SignIn'
import SignOut from'./nav/SignOut'
import {auth} from './firebaseConnection/firebaseConnection'
import { useAuthState } from 'react-firebase-hooks/auth';





function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>OneTrybe</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}












export default App;