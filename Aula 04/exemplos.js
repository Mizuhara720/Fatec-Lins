function soma(n1, n2, n3){
    //var nome = "Mizuhara";
    //console.log(nome);
   // var num1 = n1;
    //var num2 = n2;
    //var num3 = n3;
    //var resultado = num1 + num2 +num3;
    //console.log(resultado);
    //return resultado;
    if (n1 < 4) {
        return "Reprovado";
      } else if (n2 < 4) {
        return "Reprovado";
      } else if (n3 < 2){
        return "Reprovado";
      }else if(n1 > 4){
        return "Nota invalida";
      } else if (n2 > 4){
       return "Nota invalida";
      }else if(n3 > 2){
        return "Nota invalida";
     }
     return n1 + n2 + n3
    }
var somaResult = soma(4, 4, 2);

console.log("RESULTADO: ",somaResult);     
