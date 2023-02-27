<script setup>
    const props = defineProps(['tarefasFiltro'])
</script>
<template>
    <ul class="list-group mt-4">
      <li v-for="tarefa in props.tarefasFiltro" class="list-group-item">
        <input type="checkbox" :id="tarefa.nome" :checked="tarefa.ativado" @change="e => tarefa.ativado = e.target.value">
        <label :for="tarefa.nome" class="ms-3" :class="{ done: tarefa.ativado }">
          {{ tarefa.nome }}
        </label>
      </li>
    </ul>
</template>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>