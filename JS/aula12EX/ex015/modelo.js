function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if( fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(' [ ERRO ] Verifica os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gen = 'Homem'
            if( idade >= 0 && idade < 12){
                img.setAttribute('src', 'crianca-homem-mod.png')

            }else if( idade >= 12 && idade < 21){
                img.setAttribute('src', 'homem-jovem-mod.png')

            }else if( idade >= 21 && idade < 50){
                img.setAttribute('src', 'humem-adulto-mod.png')

            }else{
                img.setAttribute('src', 'velho-homem-mod.png')
                
            }
        }else if(fsex[1].checked){
            gen = 'Mulher'
            if( idade >= 0 && idade < 12){
                img.setAttribute('src', 'crianca-mulher-mod.png')

            }else if( idade >= 12 && idade < 21){
                img.setAttribute('src', 'mulher-jovem-mod.png')

            }else if( idade >= 21 && idade < 50){
                img.setAttribute('src', 'mulher-adulto-mod.png')

            }else{
                img.setAttribute('src', 'velho-mulher-mod.png')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
        
    }
}