<script setup>
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
</template>

<style scoped>

img {
  max-width: 200px;
}

</style>
