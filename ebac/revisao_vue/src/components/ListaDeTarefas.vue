<script setup>
const props = defineProps(['tarefas'])
</script>
<template>
    <ul class="list-group mt-4">
        <li v-for="tarefa in props.tarefas" class="list-group-item">
            <input @change="evento => tarefa.ativado = evento.target.checked" :checked="tarefa.ativado" type="checkbox"
                :id="tarefa.nome">
            <label :class="{ done: tarefa.ativado }" :for="tarefa.nome" class="ms-3">
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