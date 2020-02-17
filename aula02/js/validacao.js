function validar(){
    console.log("Entrei na funcao validar()");
    var inputs = document.getElementsByTagName("Input");
    var nome = inputs["nome"].value;
        //var nome =formSignUp.nome.value; inputs["nome"].value;
    console.log("Nome",nome);

    //var inputs = document.getElementsById("Input");
    //var inputs = inputs["E-mail"].value;
    var email = document.getElementById("email").value;
    console.log("EMAIL",email);

    var senha = document.getElementsByName("senha")[0].value;
    console.log("SENHA",senha);

    var confirm_senha = formSignUp.confirm_senha.value;
    console.log("CONFIRM-SENHA",confirm_senha);



    var msgerro = document.getElementById("msg_erro");
    if(nome == ""){
        msgerro.innerHTML = "Campo Nome é obrigatório!";
            return false;
    }
    if(email == ""){
        msgerro.innerHTML = "Campo Email é obrigatório!";
            return false;
    }
    if(senha == ""){
        msgerro.innerHTML = "Campo Senha é obrigatório!";
                return false;
    }
    if(confirm_senha == ""){
                    
        msgerro.innerHTML = "Campo Confirm_Senha é obrigatório!";
                return false;
    
    }
    
    //validar se o nome possui mais de tres letras 
    
    
    if(nome.length < 3){
        msgerro.innerHTML = "Digite o Nome Completo";
    }
    //Verificar se as senhas são iguais
    if(senha !== confirm_senha){
        msgerro.innerHTML = "Senhas Não Conferem";
    }

    //Se tudo conferir (Cadastrado)

    msgerro.innerHTML = "Preenchimento Completo";
}