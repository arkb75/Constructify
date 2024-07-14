<template>
  <div class="container">
    <PhaseSelector
      :tabs="tabs"
      :activeTab="activeTab"
      @update:activeTab="activeTab = $event"
    />
    <div class="content">
      <div class="question">
        <h2>Do you require financing?</h2>
        <DecisionButtons @yes="handleYes" @no="handleNo" />
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

export default {
  components: {
    PhaseSelector,
    StepperComponent,
    DecisionButtons,
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
      { label: 'Phase 1'},
      { label: 'Phase 2' },
      { label: 'Phase 3' }
    ]);
    const activeTab = ref(0);

    const handleYes = () => {
      console.log('Yes button clicked');
    };

    const handleNo = () => {
      console.log('No button clicked');
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