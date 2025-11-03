import React from 'react'

function ListExample1() {
  return (
    <div>
       <h1>Order list</h1>
      <ol type='a'>
        <li>one </li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
      </ol>
<br/>
<h1>unorderd list</h1>
      <ul>
        <li>five </li>
        <li>tea</li>
        <li>coffe</li>
        <li>balck</li>
      </ul>

      <br />
      <h1>nested list</h1>
      <ol>
        <li>jfs</li>
        <ul><li>core java</li>
        <li>j2ee</li>
        <li>js</li></ul>
      </ol>
      <ol> 
        <li>mfs</li>
        <ul><li>core java</li>
        <li>j2ee</li>
        <li>js</li></ul>
      </ol>
      <ol>
        <li>pfs</li>
        <ul><li>core java</li>
        <li>j2ee</li>
        <li>js</li></ul>
      </ol>
    </div>
  )
}

export default ListExample1
