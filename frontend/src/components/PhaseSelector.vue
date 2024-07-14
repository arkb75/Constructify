<template>
    <div class="phases">
      <Button
        v-for="(tab, index) in tabs"
        :key="index"
        :label="tab.label"
        :class="['phase-button', { active: activeTab === index, disabled: tab.disabled }]"
        :disabled="tab.disabled"
        @click="handleClick(index, tab.disabled)"
      />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Button from 'primevue/button';
  
  export default defineComponent({
    name: 'PhaseSelector',
    components: { Button },
    props: {
      tabs: {
        type: Array,
        required: true
      },
      activeTab: {
        type: Number,
        required: true
      }
    },
    methods: {
      handleClick(index, disabled) {
        if (!disabled) {
          this.$emit('update:activeTab', index);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .phases {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
    background-color: #f0f0f0;
    border-radius: 25px;
    overflow: hidden;
    padding: 0.5rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  
  .phase-button {
    flex: 1;
    border-radius: 50px;
    background-color: transparent;
    color: #007aff;
    border: none;
    padding: 10px 20px;
    outline: none;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .phase-button:focus {
    outline: none;
    box-shadow: none;
  }
  
  .phase-button.active {
    background-color: #007aff;
    color: white;
    border-radius: 25px;
  }
  
  .phase-button.disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
    pointer-events: none;
  }
  </style>