import React, { Component } from 'react'
import * as handlerNumberActions from '@/actions/number.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Article extends Component {
  constructor () {
    super()
    this.state = {}
  }
  numberAdd () {
    let count = this.props.count
    count++
    this.props.handlerNumberActions.changeCount(count)
  }
  numberSubtract () {
    let count = this.props.count
    count--
    this.props.handlerNumberActions.changeCount(count)
  }
  render () {
    console.log('+++++++++++', this.props)
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.numberAdd.bind(this)}>+</button>
        ------------------
        <button onClick={this.numberSubtract.bind(this)}>-</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    count: state.number.count
  }
}
const mapActionsToProps = dispatch => {
  return {
    handlerNumberActions: bindActionCreators(handlerNumberActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Article)