/* MENU HAMBURGUESA DESPLIEGUE DE BARRA DE NAVEGACION */

const menu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')

// Delegación de eventos
headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn--open')) {
    menu.classList.toggle('show--menu')
  }

  if (e.target.closest('.btn--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.closest('.list__link')) {
    menu.classList.remove('show--menu')

    const links = document.querySelectorAll('.list__link')
    const arrLinks = Array.from(links)

    for (const link of arrLinks) {
      link.classList.remove('active')
    }

    e.target.classList.add('active')
  }
  
  const sections = document.querySelectorAll('.section')
  const listItems = document.querySelectorAll('.list__link')

  const fuctionObserver = entries => {entries.forEach(entry => {
      if (entry.isIntersecting) {const itemActual = Array.from(listItems).find(item => item.dataset.url === entry.target.id)
        itemActual.classList.add('active')}
    })
  }

  const observer = new IntersectionObserver(fuctionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  })

  sections.forEach(section => observer.observe(section))
})



document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    menu.classList.remove('show--menu')
  }
})
/* INDICADOR DE MENU */



/* INDICADOR DE POSICION EN PAGINA */
// BOM
const html = document.documentElement

const progress = document.querySelector('.progress')

window.addEventListener('scroll', function (e) {
  const alturaPagina = html.scrollHeight - html.clientHeight

  const scrollActual = html.scrollTop

  const progreso = scrollActual / alturaPagina

  progress.style.width = Math.round(progreso * 100) + '%'

})
/* FIN INDICADOR */

/* ENVIO DEL FORMULARIO */

const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const input = this.elements
  const dataForm = {
    nombre: input.name.value,
    correo: input.email.value,
    mensaje: input.message.value
  }
  const URL = 'https://formsubmit.co/ajax/'
  const email = 'crispdevps@gmail.com'

  fetch(URL + email, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(dataForm)
  })
    .then(response => response.json())
    .then(data => {
      document.querySelector('.message--success').classList.remove
        ('hidden')
      form.reset()

      setTimeout(() => document.querySelector('.message--success')
        .classList.add('hidden'), 3500)
    })
    .catch(error => {
      document.querySelector('.message--error').classList.remove
        ('hidden')

      setTimeout(() => document.querySelector('.message--error')
        .classList.add('hidden'), 3500)
    })

})
/* FIN ENVIO FORMULARIO */

/* EFECTO CARGA SECTION HERO */

const SR = ScrollReveal()
SR.reveal('.hero__img', {
  duration: 1200,
  origin: "rigth",
  distance: "300px",
  reset: true
});

SR.reveal('.hero__content', {
  duration: 1200,
  origin: "left",
  distance: "300px",
  reset: true
});

const loader = document.getElementById("loader")

window.addEventListener("load", function () {
  loader.classList.add("hidden")
})

/* FIN EFECTO CARGA SECTION HERO */
