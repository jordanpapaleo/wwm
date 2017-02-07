import React, { Component, PropTypes } from 'react'
// import PersonForm from '../PersonForm'
import {Input} from '../Forms'

const DEFAULT_FORM = {
  group: {
    name: '',
    people: [],
    tags: [],
    notes: '',
    comments: [],
    attributes: []
  }
}

export default class GroupForm extends Component {
  static propTypes = {
    cancelCb: PropTypes.func,
    submitCb: PropTypes.func,
    group: PropTypes.shape({
      name: PropTypes.string,
      people: PropTypes.array,
      tags: PropTypes.arrayOf(PropTypes.object),
      notes: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object),
      attributes: PropTypes.arrayOf(PropTypes.object)
    })
  }

  state = {
    ...DEFAULT_FORM,
    ...this.props.group
  }

  submit = () => {
    const {submitCb} = this.props
    const {person} = this.state

    if (submitCb instanceof Function) {
      submitCb({ ...person })
    }

    this.setState({ ...DEFAULT_FORM })
  }

  cancel = () => {
    const {cancelCb} = this.props

    this.setState({
      ...DEFAULT_FORM
    }, () => {
      if (cancelCb instanceof Function) {
        cancelCb()
      }
    })
  }

  updateForm = (type, value) => {
    this.setState({
      group: {
        ...this.state.group,
        [type]: value
      }
    }, () => {
      console.log(this.state.group)
    })
  }

  render () {
    const {group} = this.state
    return (
      <div className="form">
        <Input name="name" placeholder="Group Name" type="string" value={group.name} cb={this.updateForm.bind(this)}/>

        <button type="button" onClick={this.submit}>Save</button>
        <button type="button" onClick={this.cancel}>Cancel</button>
      </div>
    )
  }
}
