<script setup>
import { reactive } from 'vue';

</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas tarefas</h1>
      <p>
        Você possui 3 tarefas pendentes
      </p>
    </header>
    <form>
      <div class="row">
        <div class="col">
          <input required type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
        <div class="col-md-2">
          <select class="form-control">
            <option value="Todas">Todas tarefas</option>
            <option value="Pendentes">Pendentes</option>
            <option value="Finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
    <ul class="list-group mt-4">
      <li class="list-group-item">
        <input type="checkbox" id="">
        <label for="" class="ms-3">

        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
