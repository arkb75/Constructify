<template>
    <div class="stepper">
      <Steps :model="steps" :activeStep="activeTab" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Steps from 'primevue/steps';
  
  export default defineComponent({
    name: 'StepperComponent',
    components: { Steps },
    props: {
      steps: {
        type: Array,
        required: true
      },
      activeTab: {
        type: Number
      }
    }
  });
  </script>
  
  <style scoped>
  .stepper {
    width: 100%;
    background-color: white;
    padding: 1rem 0;
  }
  </style>