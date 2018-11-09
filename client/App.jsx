import React from 'react'
import Header from './Components/Header';
import Table from './Components/Table';
import Guide from './Components/Guide';
import Marketinfo from './Components/Marketinfo';
import Market from './Components/Market'
import Nav from './Components/Nav'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showMarket: false
    }
  this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      showMarket: !this.state.showMarket
    })
  }

  render(){
  return (
<div className="container">
<Nav/>
  <Header />
  <Table />
  <Guide />
  <Marketinfo click={this.handleClick}/>
  {this.state.showMarket &&
  <Market />
  }
</div>

  )
}
}

export default App