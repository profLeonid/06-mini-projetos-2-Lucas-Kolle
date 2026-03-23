"use strict"

import { 
    criarListaImpares,
    criarListaMulti5,
    criarListaNumeros,
    criarListaPares, 
    criarListaPotencia2
} from "./listasNumericas.js";

const gerarNumeros = document.getElementById("gerarNumeros")

function criarLinha(numero, par, impar, multi5, potencia2){
    const tabela = document.getElementById("tabela")
    const tr = document.createElement("tr")

    const tdNumeros = document.createElement("td")
    tdNumeros.textContent = numero

    const tdPares = document.createElement("td")
    tdPares.textContent = par

    const tdImpares = document.createElement("td")
    tdImpares.textContent = impar

    const tdMulti5 = document.createElement("td")
    tdMulti5.textContent = multi5

    const tdPotencia2 = document.createElement("td")
    tdPotencia2.textContent = potencia2

    tr.replaceChildren(tdNumeros, tdPares, tdImpares, tdMulti5, tdPotencia2) //replace substitui tudo que está la

    tabela.appendChild(tr)

}

function preencherTabela(){
    const quantidade = Number(document.getElementById("quantidade").value)

    const listaNumeros = criarListaNumeros(quantidade)
    const ListaPares = criarListaPares(quantidade)
    const listaMulti5 = criarListaMulti5(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaPotencia2 = criarListaPotencia2(quantidade)

    document.getElementById("tabela").replaceChildren() //serve pra substituit tudo ao ivés de adicionar

    for (let i = 0; i < quantidade; i++){
        criarLinha(listaNumeros[i], ListaPares[i], listaImpares[i], listaMulti5[i], listaPotencia2[i])
    }

}

gerarNumeros.addEventListener("click", preencherTabela)