

function inicio(){
    var ini = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var pass = window.document.getElementById('pass')
    var res = window.document.getElementById('res')

   if(ini.value.length == 0 || fim.value.length ==0 || pass.value.length == 0){
       window.alert('erro')
   }
   else if(pass == 0)
    {
        window.alert(`PTudo OK`)
        pass = 1
    }  
}