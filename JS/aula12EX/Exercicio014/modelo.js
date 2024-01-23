function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora >= 0 && hora < 12){
        img.src = 'manha.png'
        window.document.body.style.background = '#DDAA7A'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        window.document.body.style.background = '#F7A608'
    }else{
        img.src = 'noite.png'
        window.document.body.style.background = '#1F425B'

    }

}
