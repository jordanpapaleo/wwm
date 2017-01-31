const initialState = [{
  type: 'family',
  name: 'Smiths',
  phone: '123-456-7890',
  address: {
    street: '123 Sesame St',
    city: 'Denver',
    state: 'CO',
    zip: 80439
  },
  tags: [
    { color: 'green', name: 'My tag' }
  ],
  notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  members: [
    { name: 'Jane' }, { name: 'John' }, { name: 'Jan' }
  ],
  comments: [
    { timestamp: new Date(), message: 'bla bla bla', author: { name: 'Jamie' } },
    { timestamp: new Date(), message: 'bla bla bla', author: { name: 'Kelley' } }
  ],
  attributes: [
    { name: 'Compassion Family' },
    { name: 'Memorial Tree' },
    { name: 'Counselor' }
  ]
}]

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
