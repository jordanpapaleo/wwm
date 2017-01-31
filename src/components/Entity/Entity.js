import React, { Component, PropTypes } from 'react'
import injectSheet from 'react-jss'
import { entityStyles } from './entity.jss'

@injectSheet(entityStyles)
export default class Entity extends Component {
  static propTypes = {
    sheet: PropTypes.object,
    data: PropTypes.object,
    editCb: PropTypes.func
  }

  render () {
    const {data, data: {address}, sheet: {classes}, editCb} = this.props
    return (
      <div className={classes.entity}>
        <div className={classes.tagBar} style={{backgroundColor: data.tags[0].color}}></div>
        <div className={classes.entityContent}>
          <h2>{data.name}</h2>
          <h3>{address.city}, {address.state}</h3>
          <ul>
            {data.attributes.map((attribute, i) => {
              return <li key={i}><i style={{ float: 'left', border: '1px solid gray', padding: 6 }}>{attribute.name}</i></li>
            })}
          </ul>
          <div>
            <button type="button" onClick={() => {
              console.log('New Comment')
            }}>Comment</button>
            <button type="button" onClick={() => {
              if (editCb instanceof Function) { editCb() }
            }}>Edit</button>
          </div>
        </div>
      </div>
    )
  }
}
