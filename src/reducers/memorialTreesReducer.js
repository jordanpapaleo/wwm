// import { SYNC_CLICK, ASYNC_CLICK } from '../constants/actionTypes'

const initialState = [{
  city: 'Arvada',
  updatedAt: new Date(),
  notes: 'Trees are good'
}]

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
