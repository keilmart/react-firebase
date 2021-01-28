import React from 'react';
import './App.css';
import firebase from './firebase'

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})

function App() {
  return (
    <div className="App">
      <h1>computers</h1>
    </div>
  );
}

// connect to firebase, recieve the information back in app.js // - FINISHED //
// figure out roughly, what the app will do, and how many compoenents/files within components you will need //
// set up the basic pages for the compoents, connect them all together in the proper way //
// call to firebase, where some default response will be and get a response back //
// display the response back on the page //
// apply some basic css to map out roughly how you want your page to appear, scss, flex for results, // 
// add the flip animation with the basic information of the laptop, name, processor, ram, hdd

export default App;
