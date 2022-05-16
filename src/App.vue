<script setup>
import {useTodosStore} from "@/stores/todos"
import {storeToRefs} from "pinia"
import {ref} from "vue"
import ToDoItem from "@/components/ToDoItem.vue"
import ToDoList from "@/components/ToDoList.vue"

const {items} = storeToRefs(useTodosStore())
</script>


<template>
  <h1>To Do List</h1>
  <ToDoList/>
  <ToDoItem/>
</template>


<style>
  @import "@/styles.css";
</style>