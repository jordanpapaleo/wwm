// import React from 'react'
// import { Route } from 'react-router'

import App from './modules/App'
import Counselors from './modules/Counselors'
import Families from './modules/Families'
import CompassionFamilies from './modules/CompassionFamilies'
import MemorialTrees from './modules/MemorialTrees'

/*
const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Dashboard },
  childRoutes: [
    { path: 'about', component: About },
    {
      path: 'inbox',
      component: Inbox,
      childRoutes: [{
        path: 'messages/:id',
        onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
      }]
    },
    {
      component: Inbox,
      childRoutes: [{
        path: 'messages/:id', component: Message
      }]
    }
  ]
}
*/

const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: { component: Families },
    childRoutes: [
      {
        path: '/families',
        component: Families
      },
      {
        path: '/counselors',
        component: Counselors
      },
      {
        path: '/compassion',
        component: CompassionFamilies
      },
      {
        path: '/memorial',
        component: MemorialTrees
      }
    ]
  }
]

export default routeConfig
