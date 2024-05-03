<template>
    <div>
      <h2>Sample History</h2>
      <ul>
        <li v-for="sampleHist in sampleHistory" :key="sampleHist.sampleHistoryId">
          <h3>Sample History ID: {{sampleHist.sampleHistoryId}}</h3>
          <p>Sample Date: {{sampleHist.sampleDate}}</p>
          <p>Sample Category: {{sampleHist.sampleCategory}}</p>
          <p>Sample Notes: {{sampleHist.sampleNotes}}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  
  const sampleHistory = inject('sampleHistory');
  </script>
  