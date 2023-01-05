function toggleMode() {
  // pegar a tag img
  const html = document.documentElement
  html.classList.toggle("light")
  //  O DE CIMA É UM ATALHO PRA N USAR O TANTO DE CODIGO DE BAIXO!!
  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  // } else {
  // html.classList.add("light")
  // }
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver loght mode, adicionar a imagem light
    img.setAttribute("src", "./assetes/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assetes/avatar.png")
  }
}

