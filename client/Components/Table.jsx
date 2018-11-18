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
      <td>Wadestown</td>
      <td>555</td>
      <td>--</td>
      <td>--</td>

    </tr>
    <tr>
      <td>Raroa</td>
      <td>520</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Kelburn</td>
      <td>633</td>
      <td>--</td>
      <td>--</td>
    </tr>
   
    </tbody>
  </table>
  
  )
}

export default Table