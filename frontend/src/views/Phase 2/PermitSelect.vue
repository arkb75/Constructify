<template>
    <div class="container">
      <PhaseSelector
        :tabs="tabs"
        :activeTab="activeTab"
        @update:activeTab="activeTab = $event"
      />
      <div :class="['content', { 'blurred': showFilters }]">
        <h2>Check out our recommendations for financial services:</h2>
        <div class="filter-container">
          <FilterButton :filters="filterOptions" @toggleFilters="toggleFilters" />
        </div>
        <div class="recommendations grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div :class="['stepper', { 'blurred': showFilters }]">
        <Stepper :steps="items" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import PhaseSelector from '@/components/PhaseSelector.vue';
  import Stepper from '@/components/Stepper.vue';
  import FilterButton from '@/components/FilterButton.vue';
  import ProductCard from '@/components/ProductCard.vue';
  
  export default {
    components: {
      PhaseSelector,
      Stepper,
      FilterButton,
      ProductCard
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
      const showFilters = ref(false);
      const filterOptions = ref(['Keyword', 'Bank', 'Interest rates', 'Loan amount']);
  
      const toggleFilters = () => {
        showFilters.value = !showFilters.value;
      };
  
      return { items, tabs, activeTab, showFilters, filterOptions, toggleFilters };
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
  
  .filter-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .stepper {
    margin-top: 2rem;
  }
  
  .blurred {
    filter: blur(5px);
  }
  
  .recommendations {
    display: flex;
    justify-content: center;
  }
  </style>