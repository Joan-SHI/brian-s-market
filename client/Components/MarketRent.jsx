import React from 'react'

class MarketRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            area: undefined
        }
this.handleChange = this.handleChange.bind(this)

    }
handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,  
    })
}
render() {
    return (
        <div>
          <form onSubmit={(e) => {e.preventDefault(); this.props.MarketRent(this.state.area)}}>
          <input type="text" name="area" placeholder="Area" onChange={this.handleChange} />
          <button className="formbtn"><span>Get Market Rent</span></button>
          </form>
        </div>
    )
}
}

export default MarketRent