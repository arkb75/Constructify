<template>
    <div class="manage-projects-container">
      <header>
        <img src="@/assets/logo.png" alt="logo" class="logo" @click="this.$router.push('/')" />
        <button class="plus-button" @click="createNewProject">
          <i class="pi pi-plus"></i>
        </button>
      </header>
      <main>
        <h1>Manage Existing Projects</h1>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :imageSrc="project.imageSrc"
          />
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import ProjectCard from "@/components/ProjectCard.vue";
  import project1Image from "@/assets/Ali.png";
  import project2Image from "@/assets/Ali.png";
  import project3Image from "@/assets/Ali.png";
  
  export default {
    name: "ManageProjectsView",
    components: {
      ProjectCard,
    },
    data() {
      return {
        projects: [
          { id: 1, title: "Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non orci pretium, facilisis elit.", imageSrc: project1Image },
          { id: 2, title: "Project 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non orci pretium, facilisis elit.", imageSrc: project2Image },
          { id: 3, title: "Project 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non orci pretium, facilisis elit.", imageSrc: project3Image },
        ],
      };
    },
    methods: {
      createNewProject() {
        // Implement the logic to create a new project
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .manage-projects-container {
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
    justify-content: space-between; /* Adjust spacing to include the plus button */
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
  
  .logo {
    width: 70px;
    height: auto;
  }
  
  .plus-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    position: relative;
  }
  
  .plus-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .plus-button:hover::before {
    opacity: 1;
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
  
  .projects-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  </style>