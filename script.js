function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(Number(fano.value) <= 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number.parseInt(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <5){
                img.setAttribute('src', 'BB_homem.png')
                //beber
            }else if( idade < 11){
                img.setAttribute('src', 'menino.png')
                //criança
            }else if(idade < 21){
                img.setAttribute('src', 'adolescente.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'homem.png')
                //adulto
            }else{
                img.setAttribute('src', 'velho.png')
                //idoso
            }
            
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <=5){
                img.setAttribute('src', 'bb.png')
                //beber
            }else if(idade < 11){
                img.setAttribute('src', 'menina.png')
                //crinça
            }else if(idade < 21){
                img.setAttribute('src','jovem.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'mulher.png')
                //adulto
            }else{
                img.setAttribute('src', 'idosa.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)

    }
}