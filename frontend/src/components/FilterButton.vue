<template>
    <div>
      <Button label="Filter" class="filter-button p-button-rounded mb-4" @click="toggleFilters" />
      <div :class="['filters-overlay', { 'hidden': !showFilters }]">
        <div class="close-button" @click="toggleFilters">
          <i class="pi pi-times"></i>
        </div>
        <div class="filters-container flex justify-center gap-4">
          <Button
            v-for="(filter, index) in filters"
            :key="index"
            :label="filter"
            class="p-button-rounded p-button-outlined"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Button from 'primevue/button';
  
  export default {
    name: 'FilterButton',
    components: {
      Button,
    },
    props: {
      filters: {
        type: Array,
        required: true,
      },
    },
    setup() {
      const showFilters = ref(false);
  
      const toggleFilters = () => {
        showFilters.value = !showFilters.value;
      };
  
      return { showFilters, toggleFilters };
    },
  };
  </script>
  
  <style scoped>
  .filters-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  
  .filters-container {
    display: flex;
    gap: 20px;
  }
  
  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
  
  .filter-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    max-width: 100px;
    display: inline-block;
  }
  </style>