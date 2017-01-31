import React, { Component, PropTypes } from 'react'
import {Input} from '../Forms'

const DEFAULT_FORM = {
  person: {
    name: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    tags: [],
    notes: '',
    comments: [],
    attributes: []
  }
}

export default class PersonForm extends Component {
  static propTypes = {
    cancelCb: PropTypes.func,
    submitCb: PropTypes.func,
    person: PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string
      }),
      tags: PropTypes.arrayOf(PropTypes.object),
      notes: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object),
      attributes: PropTypes.arrayOf(PropTypes.object)
    })
  }

  static defaultProps = {
    ...DEFAULT_FORM
  }

  state = {
    person: {
      ...this.props.person
    }
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
      person: {
        [type]: value
      }
    }, () => {
      console.log(this.state.person)
    })
  }

  render () {
    const {person} = this.state

    return (
      <form>
        <Input name="name" placeholder="Name" type="string" value={person.name} cb={this.updateForm.bind(this)}/>
        <Input name="phone" placeholder="Phone" type="string" value={person.phone} cb={this.updateForm.bind(this)}/>

        <hr />

        <Input name="street" placeholder="Street" type="string" value={person.address.street} cb={this.updateForm.bind(this)}/>
        <Input name="city" placeholder="City" type="string" value={person.address.city} cb={this.updateForm.bind(this)}/>
        <Input name="state" placeholder="State" type="string" value={person.address.state} cb={this.updateForm.bind(this)}/>
        <Input name="zip" placeholder="Zip" type="string" value={person.address.zip} cb={this.updateForm.bind(this)}/>

        <hr />

        <Input name="notes" placeholder="Notes" type="string" value={person.notes} cb={this.updateForm.bind(this)}/>

        <hr />

        <button type="button" onClick={this.submit}>Save</button>
        <button type="button" onClick={this.cancel}>Cancel</button>
      </form>
    )
  }
}
