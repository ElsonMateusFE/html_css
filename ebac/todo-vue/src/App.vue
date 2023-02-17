<script setup>
  import { reactive } from 'vue';
  import Cabecalho from './components/Cabecalho.vue';
  import Formulario from './components/Formulario.vue';
  import ListaDeTarefas from './components/ListaDeTarefas.vue';

const estado = reactive({
  filtro: 'todas',
  tarefaTemp: '',
  tarefas: [
    {
      titulo: 'Estudar ES6',
      finalizado: false
    },
    {
      titulo: 'Estudar SASS',
      finalizado: false
    },
    {
      titulo: 'Ir para a academia',
      finalizado: true
    }
  ]
})

const getTarefasPendentes = () => {
  return estado.tarefas.filter(tarefa => !tarefa.finalizado)
}

const getTarefasFinalizadas = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizado)
}

const getTarefasFiltradas = () => {
  const { filtro } = estado

  switch(filtro){
    case 'pendentes':
      return getTarefasPendentes()
      break
    case 'finalizadas':
      return getTarefasFinalizadas()
      break
    default:
      return estado.tarefas
  }
}

const cadastraTarefa = () => {
  const tarefaNova = {
    titulo: estado.tarefaTemp,
    finalizada: false,
  }
  estado.tarefas.push(tarefaNova)
  estado.tarefaTemp = ''
}

</script>

<template>
  <div class="container">
    <!-- {{ estado.filtro }} -->
    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length"/>
    <Formulario :troca-filtro="evento => estado.filtro = evento.target.value" :tarefa-temp="estado.tarefaTemp" :edita-tarefa-temp="evento => estado.tarefaTemp = evento.tarefa.value" :cadastra-tarefa="cadastraTarefa"/>
    <ListaDeTarefas :tarefas="getTarefasFiltradas()"/>
  </div>
</template>
