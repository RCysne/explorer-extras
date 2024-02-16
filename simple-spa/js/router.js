export class Router {

  routes = {}


  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    //verificando se o event foi passado como parâmetro. Se não foi pegar no window
    event = event || window.event
    event.preventDefault()
  
    // Com o preventDefault, o reload sempre ficava na mesma página. Com o history e o pushState, ele avisa que está alternando de página e o valor é passado no pushState
    // Parâmetros da função pushState - Data (não tenho), unused (nesse caso string) e qual o alvo (url)
    
    window.history.pushState({}, "", event.target.href)
    console.log(event.target.href)
  
    this.handle()
  }
  
  
  handle() {
      
    // a propriedade do location, pathname, especifica a url depois da barra
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
    
    console.log(route)
  }

}


