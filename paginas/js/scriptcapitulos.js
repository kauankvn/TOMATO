const capitulos = $("#butaoCapitulo")

const aparecerCapitulos = $("#capitulos")
aparecerCapitulos.toggle()
capitulos.on('click', function(){
    aparecerCapitulos.slideToggle(500)
})