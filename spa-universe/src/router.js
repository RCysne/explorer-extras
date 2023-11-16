export class Router {
    
    // Criando um objeto para receber as rotas
    routes = {}

    // função de adição das rotas no objeto
    add(routeName, page) {
        this.routes[routeName] = page;
    }

    // Função para capturar o atributo
    route(event) {
        event = event || window.event;
        event.preventDefault()

    // pushState para utilizar os botòes de navegação do browser
        window.history.pushState({}, "", event.target.href)

    // Executo a função para poder carregar a página que foi chamada novamente
        this.handle()
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
            .then(data => data.text())
            .then(html => {
            document.querySelector('#app').innerHTML = html
            })
        
        console.log(route)
    }

}