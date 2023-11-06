const routes = {
  '/': '/pages/home.html',
  '/about': '/pages/about.html',
  '/contact': '/pages/contact.html',
  404: '/pages/404.html'
}


// Sempre que clicar nos links do nav, a função route ativa, evita o recarregamento e executa o handle pegando o pathname
function route(event) {
  //verificando se o event foi passado como parâmetro. Se não foi pegar no window
  event = event || window.event
  event.preventDefault()

  // Com o preventDefault, o reload sempre ficava na mesma página. Com o history e o pushState, ele avisa que está alternando de página e o valor é passado no pushState
  // Parâmetros da função pushState - Data (não tenho), unused (nesse caso string) e qual o alvo (url)
  
  window.history.pushState({}, "", event.target.href)

  handle()

}

function handle() {
  
  // a propriedade do location, pathname, especifica a url depois da barra
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  console.log(route)
}

