<template>
    <div>
      <h2>Loans</h2>
      <ul>
        <li v-for="loan in loans" :key="loan.loanId">
          <h3>Loan ID: {{ loan.loanId }}</h3>
          <p>Name: {{ loan.loaneeName }}</p>
          <p>Institution: {{ loan.loaneeInstitution }}</p>
          <p>Email: {{ loan.loaneeEmail }}</p>
          <p>Address: {{ loan.loaneeAddress }}</p>
          <p>Start Date: {{ loan.loanStartdate }}</p>
          <p>Due Date: {{ loan.loanDuedate }}</p>
          <p>Tracking Number: {{ loan.trackingNumber }}</p>
          <p>Status: {{ loan.status }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  
  const loans = inject('loans');
  </script>
  