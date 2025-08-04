import { createBrowserRouter } from 'react-router'
import Layout from '@/layouts/Layout'
import Home from '@/pages/Home'
import Clubs from '@/pages/Clubs'
import Events from '@/pages/Events'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'clubes', Component: Clubs },
      { path: 'eventos', Component: Events },
      { path: '*', Component: NotFound }
    ],
  },
])