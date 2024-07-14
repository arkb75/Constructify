<template>
    <div class="buttons">
      <Button label="Yes" class="custom-button" @click="$emit('yes')" />
      <Button label="No" class="custom-button" @click="$emit('no')" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Button from 'primevue/button';
  
  export default defineComponent({
    name: 'DecisionButtons',
    components: { Button },
  });
  </script>
  
  <style scoped>
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .custom-button {
    border-radius: 50px;
    background-color: #007aff;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
  }
  
  .custom-button:hover {
    background-color: #005bb5;
  }
  
  .custom-button:focus {
    outline: none;
    box-shadow: none;
  }
  </style>