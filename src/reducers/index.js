import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import compassionFamilies from './compassionFamiliesReducer'
import counselors from './counselorReducer'
import families from './familiesReducer'
import memorialTrees from './memorialTreesReducer'
// import tags from './tagsReducer'
// import attrs from './attrsReducer'

export default combineReducers({
  compassionFamilies,
  counselors,
  families,
  memorialTrees,
  // tags,
  // attributes,
  // groups,
  routing: routerReducer
})

const ds = {
  groups: {
    families: [],
    compassionFamilies: [],
    counselors: []
  },
  tags: [
    {

    }
  ]
}
