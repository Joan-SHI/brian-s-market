import React from 'react'

const Marketinfo = (props) => {
  return (
      <div id="market">
    <h2>School News</h2>
   <button class="btn btn-warning" onClick={props.click}>Toggle School News</button>
   <a href="#">Top of page</a>
    </div>
  )
}

export default Marketinfo