
const formulario = document.getElementById("form-validation");

function validar(numeroA, numeroB){
    return numeroA.value < numeroB.value;
}

formulario.addEventListener("submit", function(e) { // Correção: removido o parêntese extra após "function(e)"
    e.preventDefault();
    let campoA = document.getElementById("campo-a");
    let campoB = document.getElementById("campo-b");
    
    let formularioValidacao = validar(campoA, campoB); 
    const mensagemNegativa = "Atenção: O campo B precisa ser maior que o campo A";
    const mensagemPositiva = "Formulário Válido!";
    let containerResposta = document.querySelector(".respostaUsuario");

    if (!formularioValidacao){
        containerResposta.innerHTML = mensagemNegativa;
        containerResposta.style.display = "block";
    } else {
        containerResposta.innerHTML = mensagemPositiva;
        containerResposta.style.display = "block";
    }
}); // Correção: adicionado o parêntese final após a função anônima
