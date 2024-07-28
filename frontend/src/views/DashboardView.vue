<template>
    <div class="dashboard-container">
      <header>
        <img src="@/assets/logo.png" alt="logo" class="logo" @click = "this.$router.push('/')"/>
      </header>
      <main>
        <h1>Dashboard</h1>
        <div class="dashboard-options">
          <DashboardTile
            icon="pi pi-briefcase"
            title="Manage Existing Projects"
            description="Keep track of all your ongoing projects. Update progress, manage timelines, and ensure everything is on track."
          />
          <DashboardTile
            icon="pi pi-plus-circle"
            title="Create New Project"
            description="Start a new project from scratch. Define the scope, set objectives, and allocate resources efficiently."
          />
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import DashboardTile from "@/components/DashboardTile.vue";
  
  export default {
    name: "DashboardView",
    components: {
      DashboardTile,
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .dashboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
    height: 100vh;
  }
  
  header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
  
  .logo {
    width: 70px;
    height: auto;
  }
  
  h1 {
    font-size: 2.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-top: 1.0rem;
    margin-bottom: 2.0rem; 
  }
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    width: 100%;
  }
  
  .dashboard-options {
    display: flex;
    justify-content: center;
    gap: 4rem;
  }
  </style>