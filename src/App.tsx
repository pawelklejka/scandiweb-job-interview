import React, {  PureComponent } from 'react';
import './App.css';
import { GET_CATEGORIES } from './service/junior-react-endpoint/queries/categories';
import { client } from './service/junior-react-endpoint/client';
import { GET_CURRENCIES } from './service/junior-react-endpoint/queries/currencies';
import Header from './components/Header/Header';

class App extends PureComponent {
  state = {
    categories: [],
    currencies: [],
    cart: {}
  }
  componentDidMount(){
    client.query({query: GET_CATEGORIES})
    .then(res => this.setState({categories: res.data.categories}))

    client.query({query: GET_CURRENCIES})
    .then(res => this.setState({currencies: res.data.currencies}))


    
  }

  render () {
    return(
      <div className="App">
        <Header categories={this.state.categories} currencies={this.state.currencies} cart={this.state.cart}/>
    </div>
    )

  }

}

export default App;
