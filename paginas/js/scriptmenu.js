const menuHamburger = $("#menu")

const aparacerOpecoes = $("#menuopcoes")

menuHamburger.on('click', function(){
    aparacerOpecoes.slideToggle(500)
})