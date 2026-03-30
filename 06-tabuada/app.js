"use strict"

//adicionando conteúdos do HTML no java script por meio do id
const numeroDigitado = document.getElementById("numeroDigitado")
const botaoGerarTabuada = document.getElementById("botaoGerarTabuada")
const tabelaResultados = document.getElementById("tabelaResultados")

//função para gerar a tabuada
const calcularTabuada = function(numero){
    //variáveis para desemvolver a ógica da função
    let valor1 = Number(numero)
    let referencia = []
    let adcao = []
    let subtracao = []
    let multiplicacao = []
    let divisao = []
    let tabuadaEstendida = {
        referencia,
        adcao,
        subtracao,
        multiplicacao,
        divisao
    }

    //contador para administrar os while
    let contador = 1
    //estrutura de repetição para adicionar os resultados aos ARRAYS
    while(contador <= 10){

        referencia.push(contador)
        adcao.push(Number(valor1) + Number(contador))
        subtracao.push(Number(valor1) - Number(contador))
        multiplicacao.push((Number(valor1) * Number(contador)).toFixed(2))
        divisao.push((Number(valor1) / Number(contador)).toFixed(2))

        contador +=1
    }

    return tabuadaEstendida
}

//função para enviar o numero digitado
const exibirResultados = function(){
    let tabuadaEstendida = calcularTabuada(numeroDigitado.value)
    tabelaResultados.replaceChildren()
    
    let contador = 0
    while(contador <= 10){
        const tr = document.createElement("tr")

        const tdReferencia = document.createElement("td")
        tdReferencia.textContent = tabuadaEstendida.referencia[contador]

        const tdAdcao = document.createElement("td")
        tdAdcao.textContent = tabuadaEstendida.adcao[contador]

        const tdSubtracao = document.createElement("td")
        tdSubtracao.textContent = tabuadaEstendida.subtracao[contador]

        if(tabuadaEstendida.subtracao[contador] < 0){
            console.log("deu negativo")
            tdSubtracao.className = "negativo"
        }
        
        const tdMultiplicacao = document.createElement("td")
        tdMultiplicacao.textContent = tabuadaEstendida.multiplicacao[contador]

        const tdDivisao = document.createElement("td")
        tdDivisao.textContent = tabuadaEstendida.divisao[contador]

        tr.replaceChildren(tdReferencia, tdAdcao, tdSubtracao, tdMultiplicacao, tdDivisao)
        tabelaResultados.appendChild(tr)

        contador = contador +1

    }
}

botaoGerarTabuada.addEventListener("click", exibirResultados)



