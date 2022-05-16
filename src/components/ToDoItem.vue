<script setup>
import {useTodosStore} from '@/stores/todos'
import {storeToRefs} from "pinia"
import { ref } from 'vue'

const {items} = storeToRefs(useTodosStore())

function toggleDone(item) {
  item.isDone = !item.isDone
}

function removeItem (item) {
  items.value = items.value.filter((t) => t !== item)
}
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id" :class="{ fav: item.isDone }" @click="toggleDone(item)">{{ item.text }} <button @click="removeItem(item)">X</button></li>
  </ul>
</template>