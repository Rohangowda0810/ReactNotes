import React, { Component } from 'react'

export default class CBooklist extends Component {
  render() {
    return (
      <div>
        <h4> the book is {this.props.name}</h4>
        <p>the author off the book is {this.props.author}</p>
      </div>
    )
  }
}
