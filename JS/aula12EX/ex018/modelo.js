function calcularIMC(){
    let altura = document.getElementById('txtalt')
    let peso = document.getElementById('txtpeso')
    let res = document.getElementById('res')

    if(altura.value.length == 0 || peso.value.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let alt = Number(altura.value)
        let p = Number(peso.value)
        let imc = (p / ((alt)*(alt))).toFixed(2)

        //Verificando na tebela ao qual seria o IMC da pessoa
        if(imc <= 17){
           res.innerHTML += `${imc} Muito abaixo do peso`
        }else  if( imc <= 18.5){
            res.innerHTML += `${imc} Abaixo do peso`

        }else if(imc <= 25){
            res.innerHTML += `${imc} Peso normal`
        }else if(imc <= 30){
            res.innerHTML += `${imc} Excesso de peso`

        }else if(imc <= 35){
            res.innerHTML += `${imc} Obsidade classe I`
        }else if(imc <= 40){
            res.innerHTML += `${imc} Obsidade classe II`
        }else{
            res.innerHTML += `${imc} Obsidade classe III`
        }
    }
}