// import './home'
// import './about'

const path = './home'

if (path === './home') {
  import('./home')
} else if (path === './about.js') {
  import('./about')
}
