// import { SYNC_CLICK, ASYNC_CLICK } from '../constants/actionTypes'

const initialState = [{
  type: 'family',
  name: 'Jones',
  phone: '123-456-7890',
  address: {
    street: '123 Sesame St',
    city: 'Arvada',
    state: 'CO',
    zip: 80439
  },
  tags: [
    { color: 'blue', name: 'My tag' }
  ],
  notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  members: [
    { name: 'Bill' }, { name: 'Beth' }, { name: 'Bob' }
  ],
  comments: [
    { timestamp: new Date(), message: 'bla bla bla', author: { name: 'Jamie' } },
    { timestamp: new Date(), message: 'bla bla bla', author: { name: 'Kelley' } }
  ],
  attributes: [
    { name: 'Terminal Delivery' },
    { name: 'Still Born' },
    { name: 'Sids' }
  ]
}]

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
