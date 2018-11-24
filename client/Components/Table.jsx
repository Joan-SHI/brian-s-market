import React from 'react'

const Table = () => {
  return (
    <table class="table" style={{width:"100%"}}>
    
        <thead class="thead-dark">
    <tr>
      <th scope="col">Area</th>
      <th scope="col">Rent</th> 
      <th scope="col">dwelling type</th>
      <th scope="col">flatmates Allowed</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Ngaio School</td>
      <td>2 penciles</td>
      <td>bunks</td>
      <td>4</td>

    </tr>
    <tr>
      <td>Khandallah School</td>
      <td>3 marbles</td>
      <td>tents</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Kaori Normal School</td>
      <td>a hug</td>
      <td>On Floor</td>
      <td>unlimited</td>
    </tr>
   
    </tbody>
  </table>
  
  )
}

export default Table