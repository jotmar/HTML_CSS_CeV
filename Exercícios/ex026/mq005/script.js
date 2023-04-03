const menuButton = document.querySelector('#menuButton')
const menu = document.querySelector('#menuArea')

menuButton.addEventListener('click', click)

function sizeChange() {
  if (window.innerWidth > 768) {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

function click() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}
