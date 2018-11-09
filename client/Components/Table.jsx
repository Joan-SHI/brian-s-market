import React from 'react'

const Table = () => {
  return (
    <table class="table" style={{width:"100%"}}>
    
        <thead class="thead-dark">
    <tr>
      <th scope="col">Area</th>
      <th scope="col">Rent</th> 
      <th scope="col">Bank Rate</th>
      <th scope="col">Influence</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Newlands</td>
      <td>1,000</td>
      <td>3</td>
      <td>10</td>

    </tr>
    <tr>
      <td>Khandallah</td>
      <td>500</td>
      <td>7</td>
      <td>80</td>
    </tr>
    <tr>
      <td>Wellington CBD</td>
      <td>1500</td>
      <td>1</td>
      <td>50</td>
    </tr>
   
    </tbody>
  </table>
  
  )
}

export default Table