import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Entity from '../../components/Entity'

const mapStateToProps = state => ({
  families: state.families
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class Families extends Component {
  static propTypes = {
    families: PropTypes.array
  }

  render () {
    const {families} = this.props

    return (
      <div>
        <h2>Families</h2>
        <ul>
          {families.map((family) => {
            return (
              <li key={family}>
                <Entity data={family} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
