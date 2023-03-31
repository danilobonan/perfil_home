function toggleMode() {
  const html = document.documentElement
  // o html está em uma variável
  // documento é a representação do nosso documento (página, site) em formato de objeto JS. Sempre que coloco um "." estou acessando propriedades e funcionalidades
  html.classList.toggle("light")

  // 1 - pegar a tag img
  const img = document.querySelector("#profile img")
  // mesmo seletor do CSS

  // 2 - substituir a imagem
  if (html.classList.contains("light")) {
    // estou verificando se no body, a classlist (um objeto que terá propriedades) contains ( função verifico se contém)
    // if é uma condicional, e se a condição for verdadeira, entra no código

    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    // ajustar/modificar um atributo
  } else {
    // else = senão
    img.setAttribute('src', './assets/avatar.png')
    // se tiver sem light mode, manter a imagem normal
  }
}
