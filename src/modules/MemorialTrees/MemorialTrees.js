import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  memorialTrees: state.memorialTrees
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class MemorialTrees extends Component {
  static propTypes = {
    memorialTrees: PropTypes.array.isRequired
  }

  state = {}

  render () {
    const {memorialTrees} = this.props

    return (
      <div>
        <h2>Memorial Trees</h2>
        <ul>
          {memorialTrees.map((memorialTree) => {
            return (
              <li>
                <h3>{memorialTree.city}</h3>
                <p>{memorialTree.notes}</p>
                <p>{memorialTree.updatedAt.toString()}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
