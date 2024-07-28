<template>
    <div class="option-card">
      <div class="icon-placeholder">
        <i :class="icon"></i>
      </div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "DashboardTile",
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .option-card {
    width: 250px;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .option-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .icon-placeholder {
    width: 100px;
    height: 100px;
    background-color: #e0e0e0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto 1rem;
    color: #777;
  }
  
  .option-card h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .option-card p {
    font-size: 1rem;
    color: #555;
  }
  </style>