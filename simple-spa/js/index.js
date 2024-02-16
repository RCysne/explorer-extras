import Router from './router.js'



const router = new Router();

router.add('/', '/pages/home.html');
router.add('/about', '/pages/about.html');
router.add('/contact', '/pages/contact.html');
router.add(404, '/pages/404.html')




// const routes = {
//     '/': '/pages/home.html',
//     '/about': '/pages/about.html',
//     '/contact': '/pages/contact.html',
//     404: '/pages/404.html'
// }

// handle()

// window.onpopstate = () => handle();
// a função route não estava executando, então foi chamada uma função que vai disparar ela
// window.route = () => route();

























// Sempre que clicar nos links do nav, a função route ativa, evita o recarregamento e executa o handle pegando o pathname
// function route(event) {
  //verificando se o event foi passado como parâmetro. Se não foi pegar no window
  // event = event || window.event
  // event.preventDefault()

  // Com o preventDefault, o reload sempre ficava na mesma página. Com o history e o pushState, ele avisa que está alternando de página e o valor é passado no pushState
  // Parâmetros da função pushState - Data (não tenho), unused (nesse caso string) e qual o alvo (url)
  
//     window.history.pushState({}, "", event.target.href)
//     console.log(event.target.href)

//     handle()

// }

// function handle() {
  
  // a propriedade do location, pathname, especifica a url depois da barra
//     const { pathname } = window.location
//     const route = routes[pathname] || routes[404]

//     fetch(route)
//     .then(data => data.text())
//     .then(html => {
//         document.querySelector('#app').innerHTML = html
//     })
  
//     console.log(route)
// }