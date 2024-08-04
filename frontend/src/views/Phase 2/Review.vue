<template>
  <div class="container">
    <PhaseSelector
      :tabs="tabs"
      :activeTab="activeTab"
      @update:activeTab="activeTab = $event"
    />
    <div class="content">
    <div class="question">
      <h2>Please Review your project details</h2>
      <div class="scrollable-box">
        <h4>Financing</h4>
        <p>{{ financing }}</p> <br>
        <h4>Property</h4>
        <p>{{ property }}</p> <br>
        <h4>Architect</h4>
        <p>{{ architect }}</p> <br>
        <h4>Project Consultant</h4>
        <p>{{ project }}</p> <br>
        <h4>Design Plans</h4>
        <p>{{ design }}</p> <br>
        <h4>Tendering</h4>
        <p>{{ tendering }}</p> <br>
        <h4>Permits</h4>
        <p>{{ permits }}</p> <br>
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

export default {
  components: {
    PhaseSelector,
    StepperComponent,
    DecisionButtons,
  },
  data() {
	  return {
      financing: 'Nothing to show yet',
      property: 'Nothing to show yet',
      architect: 'Nothing to show yet',
      project: 'Nothing to show yet',
      design: 'Nothing to show yet',
      tendering: 'Nothing to show yet',
      permits: 'Nothing to show yet',

	  }
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
  text-align: left; /* Ensure text inside content is left-aligned */
}

.question {
  margin-bottom: 2rem;
  text-align: left; /* Ensure text inside question is left-aligned */
}

.scrollable-box {
  max-height: 50vh; /* Adjust this value as needed */
  overflow-y: auto;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem; /* Add some padding to avoid scrollbar overlapping text */
  background-color: gainsboro;
  border-radius: 25px;
  border-color: darkgrey;
  border-style: solid;

}
</style>