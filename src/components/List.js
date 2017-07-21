import React, {Component} from 'react'
import '../styles/List.css'


export default class List extends Component {
  renderItem = (text, i) => {
    const { onClickItem } = this.props;

    return (
      <div className="item" onClick={() => onClickItem(i)}>
        {text}
      </div>
      
    )
  }

  render() {
    const { list } = this.props;

    return (
      <div className="container-list">
        {list.map(this.renderItem)}
      </div>
    )
  }


}
