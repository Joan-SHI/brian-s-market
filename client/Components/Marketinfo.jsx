import React from 'react'

const Marketinfo = (props) => {
  return (
      <div id="market">
    <h1>Market Info</h1>
   <button class="btn btn-warning" onClick={props.click}>Toggle Market Info</button>
   <a href="#">Top of page</a>
    </div>
  )
}

export default Marketinfo