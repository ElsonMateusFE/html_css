<script setup>
import { reactive } from 'vue';

const estado = reactive({
  saldo: 5000,
  transferir: 0,
  email: '',
  contator: 0,
  nome: 'Charles'
})

function saldoAtualizado(){
  const { saldo, transferir } = estado
  return saldo - transferir
}

function validaCampo(){
  const { saldo, transferir } = estado
  return saldo >= transferir
}

function add(){
  estado.contator++
}

function remove(){
  estado.contator--
}

const imgBatman = 'https://t.ctcdn.com.br/Bhc_yILZ7vL4OL5F2CVRclZydwg=/720x405/smart/filters:format(webp)/i567711.jpeg'
const ativaImgBatman = true

const imgSuperman = 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/02/superman-legacy-800x467.jpg'
const ativaImSuperman = true

</script>

<template>
  Saldo: {{ estado.saldo }} <br>
  Transferir: {{ estado.transferir }} <br>
  Saldo Atualizada: {{ saldoAtualizado() }} <br>
  <input :class="{ error: !validaCampo() }" @keyup="evento => estado.transferir = evento.target.value" type="number">
  <button v-if="validaCampo()">Transferir</button>
  <span v-else>Saldo no vermelho</span>
  <br>
  <hr>
  {{ estado.email }}
  <input type="email" @keyup="evento => estado.email = evento.target.value">
  <br>
  <hr>
  {{ estado.contator }}
  <button @click="add()">+</button>
  <button @click="remove()">-</button>
  <br>
  <hr>
  <img v-if="ativaImgBatman" v-bind:src="imgBatman" alt="">
  <img v-else-if="ativaImSuperman" :src="imgSuperman" alt="">
  <span v-else>Não curte personagens da DC Comics</span>
  <br>
  <hr>
  {{ estado.nome }}
  <h1>
    {{ estado.nome }}
  </h1>
</template>

<style scoped>
.error {
  outline-color: red;
  border-color: red;
}

img {
  max-width: 250px;
}
</style>
