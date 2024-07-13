<template>
  <div class="container">
    <div class="phases">
      <Button v-for="(tab, index) in tabs" :key="index" :label="tab.label"
        :class="['phase-button', { active: activeTab === index }]" @click="activeTab = index" />
    </div>
    <div class="content">
      <div class="question">
        <h2>Do you require financing?</h2>
        <div class="buttons">
          <Button label="Yes" class="custom-button" />
          <Button label="No" class="custom-button" />
        </div>
      </div>
    </div>
    <div class="stepper">
      <Steps :model="items" />
    </div>

    
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from 'primevue/button';
import Steps from 'primevue/steps';
import Stepper from 'primevue/stepper';
import StepperSeparator from 'primevue/stepper'
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
export default {
  components: {
    Button,
    Steps,
    Stepper,
    StepperSeparator,
    StepList,
    StepPanels,
    Step,
    StepPanel,
    
  },
  setup() {
    const items = ref([
      { label: 'Financing and property',
        separator: true
       },
      { label: 'Architect' },
      { label: 'Project Consultant' },
      { label: 'Interior Designer' },
      { label: 'Review' }
    ]);

    const tabs = ref([
      { label: 'Phase 1'},
      { label: 'Phase 2' },
      { label: 'Phase 3' }
    ]);

    const activeTab = ref(0);

    return { items, tabs, activeTab };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  text-align: center;
  padding: 2rem;
}

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
  border-radius: 0;
  background-color: transparent;
  color: #007aff;
  border: none;
  padding: 10px 20px;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
}

.phase-button:focus {
  outline: none;
}

.phase-button.active {
  background-color: #007aff;
  color: white;
  border-radius: 25px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.question {
  margin-bottom: 2rem;
}

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

.steps {
  width: 100%;
  background-color: white;
  padding: 1rem 0;
}
</style>