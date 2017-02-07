import { COUNSELOR, DELETE_COUNSELOR } from '../constants/actionTypes'

export function saveCounselor (counselor) {
  return dispatch => {
    dispatch({
      type: COUNSELOR,
      payload: counselor
    })
  }
}

export function deleteCounselor (counselor) {
  return dispatch => {
    dispatch({
      type: DELETE_COUNSELOR,
      payload: counselor
    })
  }
}
