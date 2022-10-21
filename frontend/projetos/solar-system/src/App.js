import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    // return (<p>Sistema Solar</p>);
    return (
      <main className='App'>
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
