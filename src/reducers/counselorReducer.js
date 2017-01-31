// import { SYNC_CLICK, ASYNC_CLICK } from '../constants/actionTypes'

const initialState = [{
  name: 'Joe Doc',
  phone: '123-456-7890',
  address: {
    street: '123 Sesame St',
    city: 'Denver',
    state: 'CO',
    zip: '80439'
  },
  tags: [
    { color: 'red', name: 'My tag' }
  ],
  notes: 'notes notes notes',
  comments: [],
  attributes: [
    { name: 'Grief' },
    { name: 'Marriage' },
    { name: 'Children' }
  ]
}]

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
