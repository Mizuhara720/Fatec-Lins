function mudatexto (){
console.log("Entrei Na Função mudatexto()");
        //alert("minha funcao mudatexto()");
        //como acessar um elemento de nosso html?
        //classe DOCUMENT tem acesso a toda estrutura da
        //da arvore do DOM do HTML
        var elementoP = documento.getElementById("info");
console.log("Estrutura do Elemento P", elementoP);
        elementoP.innerHTML = "Novo texto Javascript JS.";
        document.getElementById("infoP").innerHTML="TROCADO"
console.log("Sai Da Função mudatexto()");

}