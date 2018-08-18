
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '', component: () => import('pages/user/login') },
      { path: '/profile', component: () => import('pages/user/profile') },
      { path: '/cadastro', component: () => import('pages/user/cadastro') },
      { path: '/aovivo', component: () => import('pages/aoVivo') },
      { path: '/chat', component: () => import('pages/Chat') },
      { path: '/programa', component: () => import('pages/Programacao') },
      { path: '/inscricao', component: () => import('pages/Inscricao') },
      { path: '/checkin', component: () => import('pages/Checkin') },
      { path: '/comochegar', component: () => import('pages/ComoChegar') },
      { path: '/votacao', component: () => import('pages/Votacao') },
      { path: '/staff', component: () => import('pages/Staff') },

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
