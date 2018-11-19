import React from 'react'
import Header from './Components/Header';
import Table from './Components/Table';
import Guide from './Components/Guide';
import Marketinfo from './Components/Marketinfo';
import Market from './Components/Market'
import Nav from './Components/Nav'
import MarketRent from './Components/MarketRent'
import SpinnersComponent from './Components/Spinners'

import { getMarketRent } from './api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMarket: false,
      rentPrice: "___",
      loading: true,
    color: '#000000',
    className: ''
     }

    this.handleClick = this.handleClick.bind(this)
    this.updateMarketRent = this.updateMarketRent.bind(this)
  }

  updateMarketRent(suburbName) {
    //set the state to loading true
    this.setState({
      loading : true
    })
    getMarketRent(suburbName)
      .then(marketRent => {
        //set the state back to loading false 
        this.setState({
          loading : false
        })

        console.log(marketRent.items.length);

        if (marketRent.items.length > 0) {
          //array
          this.setState({
            rentPrice: marketRent.items[0].med
          })
        } else {
          //object
          this.setState({
            rentPrice: marketRent.items.med
          })

        }
        // console.log(marketRent.items)

        // this.setState({
        //   rentPrice: marketRent.items.med
        // })
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
        {!this.state.loading && <MarketRent MarketRent={this.updateMarketRent} />}
        {this.state.loading && <Spinners />}
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