function enviarNome () {
    
    document.getElementById("nomePlayer").innerHTML = nome.value + ':';
    document.getElementById("nomeuser").innerHTML = "Olá, " + nome.value + "!";
}
var nomeJogador = document.getElementById("nome").value
function jogadorJogando (){
    totalComp = []
    totalJog = []
    var resultado1computador =  Math.floor(Math.random() * 6) +1;
    var resultado2computador =  Math.floor(Math.random() * 6) +1;
    var resultado3computador =  Math.floor(Math.random() * 6) +1;
    var resultado1jogador = parseInt(prompt("Digite o número do primeiro dado: "));
    var resultado2jogador = parseInt(prompt("Digite o número do segundo dado: "));
    var resultado3jogador = parseInt(prompt("Digite o número do terceiro dado: "));
    var resultadoJogador = resultado1jogador + resultado2jogador + resultado3jogador;
    var resultadoComputador = resultado1computador + resultado2computador + resultado3computador;
    document.getElementById("result1comp").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado1computador + ".png' width='60px' height='60px'>"
    document.getElementById("result2comp").innerHTML = "<img alt='imgcomp2' src='./images/dado" + resultado2computador + ".png' width='60px' height='60px'>"
    document.getElementById("result3comp").innerHTML = "<img alt='imgcomp3' src='./images/dado" + resultado3computador + ".png' width='60px' height='60px'>"
    document.getElementById("result1player").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado1jogador + ".png' width='60px' height='60px'>"
    document.getElementById("result2player").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado2jogador + ".png' width='60px' height='60px'>"
    document.getElementById("result3player").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado3jogador + ".png' width='60px' height='60px'>"
    totalComp.push(resultado1computador, resultado2computador, resultado3computador);
    totalJog.push(resultado1jogador,resultado2jogador,resultado3jogador);
    somaComp = totalComp[0] + totalComp[1] + totalComp[2]
    somaJog = totalJog[0] +totalJog[1] + totalJog[2]
    
    
    if ((somaComp) > (somaJog)){
        document.getElementById("resultado").innerHTML = "O computador ganhou por " + somaComp + " a " + somaJog
    } else if ((somaComp) < (somaJog)) {
        document.getElementById("resultado").innerHTML = "O jogador ganhou por " + somaJog + " a " + somaComp
    }

}

function gerarNumeros () {
    totalComp = []
    totalJog = []
    var resultado1computador =  Math.floor(Math.random() * 6) +1 ;
    var resultado2computador =  Math.floor(Math.random() * 6) +1;
    var resultado3computador =  Math.floor(Math.random() * 6) +1;
    var resultado1jogador = Math.floor(Math.random() * 6) +1;
    var resultado2jogador = Math.floor(Math.random() * 6) +1;
    var resultado3jogador = Math.floor(Math.random() * 6) +1;
    document.getElementById("result1comp").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado1computador + ".png' width='60px' height='60px'>"
    document.getElementById("result2comp").innerHTML = "<img alt='imgcomp2' src='./images/dado" + resultado2computador + ".png' width='60px' height='60px'>"
    document.getElementById("result3comp").innerHTML = "<img alt='imgcomp3' src='./images/dado" + resultado3computador + ".png' width='60px' height='60px'>"
    document.getElementById("result1player").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado1jogador + ".png' width='60px' height='60px'>"
    document.getElementById("result2player").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado2jogador + ".png' width='60px' height='60px'>"
    document.getElementById("result3player").innerHTML = "<img alt='imgcomp1' src='./images/dado" + resultado3jogador + ".png' width='60px' height='60px'>"
    totalComp.push(resultado1computador, resultado2computador, resultado3computador);
    totalJog.push(resultado1jogador,resultado2jogador,resultado3jogador);
    somaComp = totalComp[0] + totalComp[1] + totalComp[2]
    somaJog = totalJog[0] +totalJog[1] + totalJog[2]
    
 

    if ((resultado1computador + resultado2computador + resultado3computador) > (resultado1jogador + resultado2jogador + resultado3jogador)){
        document.getElementById("resultado").innerHTML = "O computador ganhou por " + somaComp + " a " + somaJog
        
    } else {
        document.getElementById("resultado").innerHTML = "O jogador ganhou por " + somaJog + " a " + somaComp
        
    }
}


