import React from 'react';
import './App.css';
import Header from './header/Header';
import Hello from './hello/Hello';
import Length from './length/Length';
import Tobinary from './tobinary/Tobinary';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hello />
        <Length />
        <Tobinary/>
      </div>
    )
  }
}

export default App;
