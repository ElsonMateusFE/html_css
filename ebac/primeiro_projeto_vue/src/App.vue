<script setup>
import { reactive } from 'vue';

const nome = 'Charles Cooper'
const meuObj = {
  nome: 'Charles',
  filmeFavorito: 'O Senhor dos Anéis'
}

function dizOla(){
  return `${nome} diz oi`
}

function dizOlaComParemetro(nome){
  return `${nome} diz oi`
}

const enderecoDaImagemDoBatman = 'https://t.ctcdn.com.br/Bhc_yILZ7vL4OL5F2CVRclZydwg=/720x405/smart/filters:format(webp)/i567711.jpeg'
const imagemSuperman = 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/02/superman-legacy-800x467.jpg'

const botaoEstaDesabilitado = false

const gostaDoBatman = false
const gostaDoSuperman = false

const estaAutorizado = false

//let contador = 0
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['gian', 'paulo', 'luisa', 'monica'],
  nomeAInserir: ''
})

function incrementar(){
  estado.contador++
}

function decrementar(){
  estado.contador--
}

function alteraEmail(evento){
  estado.email = evento.target.value
}

function mostrarSaldoFuturo(){
  const { saldo, transferindo } = estado
  return saldo - transferindo
  //return estado.saldo - estado.transferindo
}

function validaValorTransferencia(){
  const { saldo, transferindo } = estado
  return saldo >= transferindo
}

//const nomes = ['gian', 'paulo', 'luisa', 'monica']

function cadastrarNome(){
  if(estado.nomeAInserir.length >= 3){
    estado.nomes.push(estado.nomeAInserir)
  }else{
    alert('Digite mais caracteres')
  }
}

</script>

<template>
  <!--<h1>{{ 2 + 2 }}</h1>
      <h1>{{ nome }}</h1>
       <h1>{{ meuObj.filmeFavorito }}</h1>
  -->
    <h1>{{ dizOla() }}</h1>
    <!--
    <img v-bind:src="enderecoDaImagemDoBatman" alt="">
    -->
    <!--
    v-if -> não renderiza a imegem
    v-show -> coloca um display none
    -->
    <img v-if="gostaDoBatman" :src="enderecoDaImagemDoBatman" alt="">
    <img v-else-if="gostaDoSuperman" :src="imagemSuperman" alt="">
    <h2 v-else>Não curte heróis da DC</h2>

    <h1 v-if="estaAutorizado">Bem-vindo</h1>
    <h1 v-else>Não possui acesso</h1>

    <button :disabled="!botaoEstaDesabilitado">Enviar mensagem</button>
    <br>
    <hr>
    {{ estado.contador }}
    <button @click="incrementar" type="button">+</button>
    <button @click="decrementar" type="button">-</button>
    <br>
    <hr>
    {{ estado.email }}
    <!-- @change -->
    <!--
    <input type="email" @keyup="evento => estado.email = evento.target.value">
    -->
    <input type="email" @keyup="alteraEmail">
    <br>
    <hr>
    Saldo: {{ estado.saldo }} <br>
    Transferindo: {{ estado.transferindo }} <br>
    Saldo depois da transfência: {{ mostrarSaldoFuturo() }} <br>
    <!--
    <input :class="{ invalido: estado.transferindo > estado.saldo }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir"></input>
    -->
    <input class="campo" :class="{ invalido: !validaValorTransferencia(), campo2: condicao }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
    <button v-if="validaValorTransferencia()">Transferir</button>
    <span v-else>Valor maior que o saldo</span>
    <br>
    <hr>
    <ul>
      <li v-for="nome in estado.nomes">
      {{ nome }}</li>
    </ul>
    <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
    <button @click="cadastrarNome" type="button">Cadastrar nome</button>
</template>

<style scoped>

img {
  max-width: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}

.campo {
  border: 2px solid black;
}

</style>
