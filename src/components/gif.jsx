import React, { Component } from 'react'

export class Gif extends Component {
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={src} alt="" className="gif" />
    )
  }
}

export default Gif;
