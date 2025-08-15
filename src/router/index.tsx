import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layouts/Layout'
import { appRoutes } from '@/consts/routes'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: appRoutes.map(({ path, Component }, index) => ({
      path: index === 0 ? undefined : path.replace(/^\//, ''), // el index route no lleva slash
      index: index === 0,
      Component
    }))
  }
])
