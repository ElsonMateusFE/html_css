<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import ListaDeTarefas from './components/ListaDeTarefas.vue';
import Formulario from './components/Formulario.vue';

const estado = reactive({
  filtro: 'Todas',
  novaTarefa: '',
  tarefas: [
    {
      nome: 'Tarefa 1',
      ativado: false
    },
    {
      nome: 'Tarefa 2',
      ativado: false
    },
    {
      nome: 'Tarefa 3',
      ativado: true
    }
  ]
})

const getTarefasPendentes = () => {
  return estado.tarefas.filter(tarefa => !tarefa.ativado)
}

const getTarefasFinalizados = () => {
  return estado.tarefas.filter(tarefa => tarefa.ativado)
}

const getTarefasFiltradas = () => {
  const { filtro } = estado

  switch( filtro ){
    case 'Pendentes':
      return getTarefasPendentes()
    case 'Finalizadas':
      return getTarefasFinalizados()
    default:
      return estado.tarefas
  }
}

const cadastrarTarefa = () => {
  const addTarefa = {
    nome: estado.novaTarefa,
    ativado: false
  }
  estado.tarefas.push(addTarefa)
  estado.novaTarefa = ''
}
</script>

<template>
  <div class="container">
    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length"/>
    <!--
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas tarefas</h1>
      <p>
        Você possui {{ getTarefasPendentes().length }} tarefas pendentes
      </p>
    </header>
    -->
    <Formulario :troca-filtro="evento => estado.filtro = evento.target.value" :tarefa-temp="estado.novaTarefa" :edita-tarefa-temp="evento => estado.novaTarefa = evento.target.value" :cadastrar-tarefa="cadastrarTarefa"/>
    <!--
    <form @submit.prevent="cadastrarTarefa">
      <div class="row">
        <div class="col">
          <input :value="estado.novaTarefa" @change="evento => estado.novaTarefa = evento.target.value" required type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
        <div class="col-md-2">
          <select @change="evento => estado.filtro = evento.target.value" class="form-control">
            <option value="Todas">Todas tarefas</option>
            <option value="Pendentes">Pendentes</option>
            <option value="Finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
    -->
    <ListaDeTarefas :tarefas="getTarefasFiltradas()"/>
    <!--
    <ul class="list-group mt-4">
      <li v-for="tarefa in getTarefasFiltradas()" class="list-group-item">
        <input @change="evento => tarefa.ativado = evento.target.checked" :checked="tarefa.ativado" type="checkbox" :id="tarefa.nome">
        <label :class="{ done: tarefa.ativado }" :for="tarefa.nome" class="ms-3">
          {{ tarefa.nome }}
        </label>
      </li>
    </ul>
    -->
  </div>
</template>
