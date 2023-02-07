let solicitar = document.getElementsByClassName("pedir"); 

var pedido = async function () {

    let element = this;
    let cor = element.getAttribute("data-color");


    let pedidoUsuario = prompt("DIGITE O TAMANHO DA PIZZA ESCOLHIDA POR FAVOR SR(A)... FAMÍLIA, GRANDE, MÉDIA OU MINI ?");

    if(pedidoUsuario.length == 7){
        alert("Sua Pizza Família Ficará pronta em até 10 minutos!!!");
        element.innerText = "Preparando pedido...";
        element.style.background = "red";

     }
     else if(pedidoUsuario.length == 6){
        alert("Sua Pizza Grande Ficará pronta em até 10 minutos!!!");
        element.innerText = "Preparando pedido...";
            element.style.background = "red";

     }

    else if(pedidoUsuario.length == 5){
        alert("Sua Pizza Media Ficará pronta em até 10 minutos!!!");
        element.innerText = "Preparando pedido...";
        element.style.background = "red";

     }
     else if(pedidoUsuario.length == 4){
        alert("Sua Mini Pizza Ficará pronta em até 10 minutos!!!");
        element.innerText = "Preparando pedido...";
        element.style.background = "red";
        
     }

    else{
        alert("Informe o tamanho certo da pizza!");
        removeEventListenerset

     }
    
    setTimeout(function () {
        element.innerText = "Seu Pedido Está Pronto!";
        element.style.background = "#008000";
    }, 2000);
}

for (let i = 0; i < solicitar.length; i++) {
    solicitar[i].addEventListener("click", pedido);
}












