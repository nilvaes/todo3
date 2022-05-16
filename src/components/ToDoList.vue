<script setup>
import {useTodosStore} from '@/stores/todos'
import {storeToRefs} from "pinia"
import { ref } from 'vue'

const {items} = storeToRefs(useTodosStore())

const newItem = ref("")

function saveItem() {
  items.value.push({id: items.value.length + 1, text: newItem.value})
  newItem.value = ""
}
</script>

<template>
  <input v-model.trim="newItem" @keyup.enter="saveItem" type="text" placeholder="Add an assignment...">
  <button @click="saveItem" class="btn submit">
    Add
  </button>
</template>