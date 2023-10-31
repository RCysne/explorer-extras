function route(event) {
  //verificando se o event foi passado como parâmetro. Se não foi pegar no window
  event = event || window.event
  event.preventDefault()
}
