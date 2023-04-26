$(document).ready(function(){

    $("#telefone").mask('(00) 00000-0000');
    $("#cpf").mask('000.000.000-00');
    $("#cep").mask('00000‑000 ');
})


$('form').validate({
    rules: {
        nome:  {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        },
        cpf: {
            required: false,
        },
        endereco: {
            required: true,
        },
        cep: {
            required: true,
        }
    },
    messages: {
        nome: 'Por favor, insire seu nome!',
        email: 'Por favor, insire seu email!',
        telefone: 'Por favor, insire seu telefone!',
        endereco: 'Por favor, insire seu endereco!',
        cep: 'Por favor, insire seu cep!'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
    } 

})