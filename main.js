/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu*/ 
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* Mudar o header da página quando der scroll */
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    // header.classList.add('scroll') 
    if (window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')   
    } else {
        // menor que a altura do header
        header.classList.remove('scroll') 
    }
}

/* testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/*ScrollReaveal: mostra elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card, 
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
    { interval: 100 }
    )

 /* Botão voltar para o topo */
 function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 460) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
 }
 
 /* when Sscroll */
 window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
})