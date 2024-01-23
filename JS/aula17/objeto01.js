 let amigo = {
    nome: 'Luis',
    sexo: 'M', 
    idade: 17,
    peso: 66.7,
    engorda(p=0){
        console.log('Engordou')
        this.peso == p; 
        return p

    }
 }
 amigo.engorda(4)
 console.log(amigo)