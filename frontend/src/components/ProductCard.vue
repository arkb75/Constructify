<template>
    <div class="recommendation-card">
      <div class="img-placeholder">IMG</div>
      <p>
        Product name: <br />
        Offered by: <br />
        Loan amount range: <br />
        Interest rate:
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
  };
  </script>
  
  <style scoped>
  .recommendation-card {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    border: 1px solid #ccc;
  }
  
  .img-placeholder {
    width: 100%;
    height: 150px;
    background-color: #ddd;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    color: #666;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }
  </style>