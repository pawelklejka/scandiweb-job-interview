import React, {  PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { GET_CATEGORIES } from './service/junior-react-endpoint/queries/categories';
import { useQuery } from '@apollo/client';
import { client } from './service/junior-react-endpoint/client';
class App extends PureComponent {

  componentDidMount(){
    let name = client.query({query: GET_CATEGORIES})
    .then(data => console.log(data))
    
  }

  render () {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )

  }

}

export default App;
