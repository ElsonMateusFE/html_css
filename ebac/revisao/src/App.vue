<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Formulario from './components/Formulario.vue';
import Tarefas from './components/Tarefas.vue';

  const estado = reactive({
    filtro: 'Todos',
    novaTarefa: '',
    tarefas: [
      {
        nome: 'Tarefa 01',
        ativado: false
      },
      {
        nome: 'Tarefa 02',
        ativado: false
      },
      {
        nome: 'Tarefa 03',
        ativado: true
      }
    ]
  })

  const getTarefasPendentes = () => {
    return estado.tarefas.filter(a => !a.ativado)
  }

  const getTarefasFinalizada = () => {
    return estado.tarefas.filter(a => a.ativado)
  }

  const getTarefasFiltro = () => {
    const { filtro } = estado

    switch(filtro){
      case 'Pendentes':
        return getTarefasPendentes()
      case 'Finalizadas':
        return getTarefasFinalizada()
      default:
        return estado.tarefas
    }
  }

  const cadastrarTarefas = () => {
    const { tarefas, novaTarefa } = estado

    const addTarefa = {
      nome: novaTarefa,
      ativado: false
    }

    tarefas.push(addTarefa)
    estado.novaTarefa = ''
  }
</script>

<template>
  <div class="container">
    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length"/>
    <Formulario :cadastrar-tarefas="cadastrarTarefas" :value-tarefas="estado.novaTarefa" :nova-tarefa="e => estado.novaTarefa = e.target.value" :tarefas-filtro="e => estado.filtro = e.target.value"/>
    <Tarefas :tarefas-filtro="getTarefasFiltro()"/>
  </div>
</template>