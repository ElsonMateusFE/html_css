<script setup>
const props = defineProps(['cadastrarTarefas', 'valueTarefas', 'novaTarefa', 'tarefasFiltro'])
</script>
<template>
    <form @submit.prevent="props.cadastrarTarefas">
        <div class="row">
            <div class="col">
                <input :value="props.valueTarefas" @change="props.novaTarefa" required type="text"
                    placeholder="Digite aqui a descrição da tarefa" class="form-control">
            </div>
            <div class="col-md-2">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
            <div class="col-md-2">
                <select @change="props.tarefasFiltro" class="form-control">
                    <option value="Todas">Todas tarefas</option>
                    <option value="Pendentes">Pendentes</option>
                    <option value="Finalizadas">Finalizadas</option>
                </select>
            </div>
        </div>
    </form>
</template>