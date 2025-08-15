import Home from '@/pages/Home'
import Clubs from '@/pages/Clubs'
import Events from '@/pages/Events'
import Staffs from '@/pages/Staffs'
import NotFound from '@/pages/NotFound'

export const appRoutes = [
  { name: 'Inicio', path: '/', Component: Home, nav: false },
  { name: 'Clubes', path: '/clubes', Component: Clubs, nav: true },
  { name: 'Eventos', path: '/eventos', Component: Events, nav: true },
  { name: 'Staffs', path: '/staffs', Component: Staffs, nav: true },
  { name: '404', path: '*', Component: NotFound, nav: false }
]