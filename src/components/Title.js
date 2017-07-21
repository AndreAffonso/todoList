import React, {Component} from 'react'
import '../styles/Title.css'

export default class Title extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="header">
        <div className="title">{ children }</div>
      </div>
    )
  }
}
