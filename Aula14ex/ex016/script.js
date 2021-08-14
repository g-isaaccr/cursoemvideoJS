

function inicio(){
    var ini = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var pass = window.document.getElementById('pass')
    var res = window.document.getElementById('res')
   
   if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
       res.innerHTML = `Impossível contar!` 

   }
   else 
    {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(p <= 0 ){
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        } 
        
        if(i<f){
        for(var c = i;c<=f;c += p) // Contagem crescente
            {
            res.innerHTML += ` ${c} \u{1F449} `
           
            } 
        
        }
        else{
            for(var c = i; c>=f;c -= p)// Contagem decrescente
            {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } 
            res.innerHTML += `\u{1F3C1}`
        }
    }  
