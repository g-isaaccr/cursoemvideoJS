window.alert(`Seja bem-vindo(a) ao meu site!`)
        function clicou (){
            var numero =Number(window.prompt(`Digite um número:`))
            //var num = Number(numero.value) errei aqui
            
            var res = window.document.getElementById('res')
            res.innerHTML = (`<p> O dobro de ${numero} é ${numero*2} e a metade é ${numero/2}!`)

        }


