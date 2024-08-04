<template>
  <div class="container">
    <PhaseSelector :tabs="tabs" :activeTab="activeTab" @update:activeTab="activeTab = $event" />
    <div class="content">
      <div class="question">
        <h2>Are you selling this house or moving in?</h2>
        <div class="buttons">
          <Button label="Selling" class="custom-button" @click="$emit('yes')" />
          <Button label="Moving" class="custom-button" @click="$emit('no')" />
        </div>
      </div>
    </div>
    <StepperComponent :steps="items" />
  </div>
</template>

<script>
import { ref } from 'vue';
import PhaseSelector from '@/components/PhaseSelector.vue';
import StepperComponent from '@/components/Stepper.vue';
import DecisionButtons from '@/components/DecisionButtons.vue';
import Button from 'primevue/button';

export default {
  components: {
    PhaseSelector,
    StepperComponent,
    DecisionButtons,
    Button
  },
  setup() {
    const items = ref([
      { label: 'Financing and property', separator: true },
      { label: 'Architect' },
      { label: 'Project Consultant' },
      { label: 'Interior Designer' },
      { label: 'Review' }
    ]);
    const tabs = ref([
      { label: 'Phase 1', disabled: false },
      { label: 'Phase 2', disabled: true },
      { label: 'Phase 3', disabled: true }
    ]);
    const activeTab = ref(0);

    const handleYes = () => {
      console.log('Yes button clicked');
      // Enable Phase 2 when Yes is clicked
      tabs.value[1].disabled = false;
    };

    const handleNo = () => {
      console.log('No button clicked');
      // Enable Phase 3 when No is clicked
      tabs.value[2].disabled = false;
    };

    return { items, tabs, activeTab, handleYes, handleNo };
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

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.question {
  margin-bottom: 2rem;
}
</style>