import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Entity from '../../components/Entity'

const mapStateToProps = state => ({
  compassionFamilies: state.compassionFamilies
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class CompassionFamilies extends Component {
  static propTypes = {
    compassionFamilies: PropTypes.array
  }

  render () {
    const {compassionFamilies} = this.props

    return (
      <div>
        <h2>Compassion Families</h2>
        <ul>
          {compassionFamilies.map((family) => {
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
