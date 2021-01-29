
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import LandingPage from './Components/LandingPage.js';
import Gallery from './Components/Gallery.js';
import Footer from './Components/Footer.js';
import firebase from './Services/firebase'

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})


class App extends Component {
  constructor(){
    super();
    this.state = {
      displayLandingPage: true,
      application: [],
      picture: [],
      comments: "",
      ALT: ""
    }
  }

    galleryEngaged = () => {
    this.setState({
      displayGallery: true,
      displayLandingPage: false,
    });
  }


  componentDidMount(){
    const dbRefObject = firebase.database().ref();

    dbRefObject.on('value', (snapshot) =>{
      const comments = snapshot.val();
      const mainArray = Object.entries(comments)
      this.setState({
        comments: mainArray
      })
    })
  }




  render() {
  return (
    <React.Fragment>
      <div className='App'>
        <Header/>
        <h1>computers</h1>
        <Gallery/>
        {/* <main className="wrapper">
          {this.state.showHomepage ? <LandingPage searchPlantsProp={this.showPlantSearchComponent} /> : null}
          {this.state.showPlantSearchComponent ? <PlantSearch plantsProp={this.state.plants} /> : null}
        </main> */}
        {/* {
          // WHY IS THIS REVERSE THERE??? // 
            this.state.notes.reverse().map((comment) => {
              return (
                <Notes 
                  noteText={comment[1].note} 
                  key={comment[0]} 
                  noteId={comment[0]}
                  noteImage={comment[1].image}
                  altText={comment[1].altText}
                  savedStateComment={comment[1]} 
                  updatedCommentProp={this.addNewComment} 
                />
                
              )
            })
          }           */}
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
