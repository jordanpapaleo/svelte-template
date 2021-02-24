import Home from 'views/Home.svelte'
import Ui from 'views/Ui.svelte'
import PageNotFound from 'views/PageNotFound.svelte'

// function userIsAdmin() {
//   check if user is admin and returns true or false
// }

const routes = [
  { name: '/', component: Home },
  { name: 'ui', component: Ui },
  { name: '404', path: '404', component: PageNotFound },
  // {
  //   name: 'admin',
  //   component: AdminLayout,
  //   onlyIf: { guard: userIsAdmin, redirect: '/login' },
  // }
]

export { routes }
