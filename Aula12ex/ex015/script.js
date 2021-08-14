function verificar (){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.querySelector('div#res')
 if(fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <5)
            {
                //bebe
                img.setAttribute('src', 'bebemasc.png')
            }
            else if( idade < 15 )
            {
                //jovemf
                img.setAttribute('src', 'criancamas.png')
            }
            else if (idade < 60)
            {
                //adulto
                img.setAttribute('src', 'jovemmasc.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosomac.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <5)
            {
                //bebe
                img.setAttribute('src', 'bebefem.png')
            }
            else if( idade < 15 )
            {
                //criança
                img.setAttribute('src', 'criançafem.png')
            }
            else if (idade < 60)
            {
                //adulto
                img.setAttribute('src', 'adultofem.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        } 
}