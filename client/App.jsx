import React from 'react'
import Header from './Components/Header';
import Table from './Components/Table';
import Guide from './Components/Guide';
import Marketinfo from './Components/Marketinfo';
import Market from './Components/Market'
import Nav from './Components/Nav'
import MarketRent from './Components/MarketRent'

import { getMarketRent } from './api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMarket: false,
      rentPrice: "---"
    }
    this.handleClick = this.handleClick.bind(this)
    this.updateMarketRent = this.updateMarketRent.bind(this)
  }

  updateMarketRent(suburbName){

    getMarketRent(suburbName)
       .then(marketRent => {
    
        // console.log(marketRent.items)
    
        this.setState({
          rentPrice: marketRent.items.med
        })
      })
  }

  componentDidMount() {
    // getMarketRent()
    //   .then(marketRent => {
    //     console.log('marketRent is', marketRent)

    //     // TODO this.setState
    //     this.setState({
    //       error: err,
    //       marketRent: {}

    //     })
    //   })
  }

  handleClick() {
    this.setState({
      showMarket: !this.state.showMarket
    })
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
        <Table />
        <h2>The Market Rent Rate Is {this.state.rentPrice}</h2>
        <MarketRent MarketRent={this.updateMarketRent}/>
        <Guide />
     <Marketinfo click={this.handleClick} />
        {this.state.showMarket &&
          <Market />
        }
      </div>

    )
  }
}

export default App