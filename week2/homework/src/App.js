import React from 'react';
// import Friend from './components/exercise-1/Friend';
// import DogGallery from './components/exercise-2/DogGallery';
import RandomJoke from './components/exercise-3/RandomJoke';

import './App.css';

function App() {
  return (
    <div className="App">
      {<Friend />}
      {<DogGallery />}
      {<RandomJoke />}
    </div>
  );
}

export default App;
