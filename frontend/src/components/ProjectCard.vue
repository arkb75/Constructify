<template>
    <div class="project-card">
      <div class="image-placeholder" :style="{ backgroundImage: `url(${imageSrc})` }"></div>
      <div class="card-content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <Button label="Manage" class="p-button-outlined" />
    </div>
  </template>
  
  <script>
  import Button from 'primevue/button';
  
  export default {
    name: 'ProjectCard',
    components: {
      Button,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imageSrc: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    width: 300px;
    padding: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
  }
  
  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .image-placeholder {
    width: 100%;
    height: 200px; /* Adjust this as needed */
    background-color: #e0e0e0;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-content h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  
  .card-content p {
    font-size: 1rem;
    color: #555;
  }
  </style>