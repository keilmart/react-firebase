
import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer.js';
import LandingPage from './Components/LandingPage.js';
import firebase from './Services/firebase'

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})


class App extends Component {
  render() {
  return (
    <React.Fragment>
      <div className='App'>
        <h1>computers</h1>
        <LandingPage/>
        <Footer/>
      </div>
    </React.Fragment>
  );
  }
}

// connect to firebase, recieve the information back in app.js // - FINISHED //
// figure out roughly, what the app will do, and how many compoenents/files within components you will need //
// set up the basic pages for the compoents, connect them all together in the proper way //
// call to firebase, where some default response will be and get a response back //
// display the response back on the page //
// apply some basic css to map out roughly how you want your page to appear, scss, flex for results, // 
// add the flip animation with the basic information of the laptop, name, processor, ram, hdd

export default App;
