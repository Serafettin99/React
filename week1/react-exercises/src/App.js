import React from 'react';
import './App.css';
import HobbyList from './components/exercise-1/HobbyList';
import Guarantee from './components/exercise-2/Guarantee';
import coin from './components/pics/coin.png';
import chat from './components/pics/chat.png';
import delivery from './components/pics/f-delivery.png';

function App() {
  return (
    <div className="app">
      <HobbyList className="hobby-list" />

      <br />
      <div className="guarantee">
        <Guarantee
          img={delivery}
          title="Free shipping"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          alt="truck"
        />
        <Guarantee
          img={coin}
          title="100% Money back"
          description="Phasellus nunc lorem, dignissim vitae lobortis sit amet, eleifend non sapien"
          alt="geld"
        />
        <Guarantee
          img={chat}
          title="Online support 24/7"
          description="Mauris posuere aliquet mauris, in tincidunt ipsum"
          alt="chat"
        />
      </div>
      <br />
    </div>
  );
}

export default App;
