const capitulos = $("#butaoCapitulo")

const aparecerCapitulos = $("#capitulos")

capitulos.on('click', function(){
    aparecerCapitulos.slideToggle(500)
})