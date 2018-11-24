import React from 'react'

class MarketRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            area: undefined,
            MarketRent: props.MarketRent
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
          <form onSubmit={(e) => {e.preventDefault(); this.state.MarketRent(this.state.area)}}>
          <input type="text" name="area" placeholder="Area" onChange={this.handleChange} />
          <button className="formbtn" class="btn btn-warning"><span >Get Today's Rent</span></button>
          </form>
        </div>
    )
}
}

export default MarketRent