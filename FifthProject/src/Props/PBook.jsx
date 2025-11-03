import React, { Component } from 'react'
import CBooklist from './CBooklist'

export default class PBook extends Component {
  render() {
    return (
      <div>
        <h1>BOOK LIST</h1>
        <CBooklist name="reactjs" author="Jorda Walke"/>
        <CBooklist name="java"/>
      </div>
    )
  }
}
