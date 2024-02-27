var nome;
var altura;
var peso;
var massa;
var resp;
//M = peso (quilos) ÷ altura²


function imc(peso, altura){
    massa = peso / (altura**2)

    if (massa < 16){
        resp = "Baixo peso muito grave"
    }
    else if(16 < massa < 16.990){
        resp = "Baixo peso grave"
    }

    else if(17 < massa < 18.49){
        resp = "Baixo peso"
    }

    else if(18.50 < massa < 24.99){
        resp = "Peso normal"
    }
    
    else if(25 < massa < 29.99){
        resp = "Sobrepeso"
    }

    else if(30 < massa < 34.99){
        resp = "Obesidade grau I"
    }

    else if(35 < massa < 39.99){
        resp = "Obesidade grau II"
    }

    else if(massa > 40){
        resp = "Obesidade grau III"
    }

    return(resp)
}

console.log(imc(105, 180))