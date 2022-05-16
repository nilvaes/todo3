import { defineStore } from "pinia";
import {storeToRefs} from "pinia"


export const useTodosStore = defineStore('items', {
  state: () => ({
    items: [
      {id: 1, text:"learning german", isDone: true},
      {id: 2, text:"learning vue.js 3", isDone: false},
      {id: 3, text:"learning pinia", isDone: false},
    ]
  }),
  actions: {
    // actions sind in den eigenen Componenten.
    
  }
})