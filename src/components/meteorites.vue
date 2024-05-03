<template>
  <h2>Meteorites</h2>
  <ul>
    <li v-for="meteorite in meteorites" :key="meteorite.MonnigNumber">
      <h3>Meteorite ID: {{ meteorite.MonnigNumber }}</h3>
      <p>Name: {{ meteorite.Name }}</p>
      <p>Country: {{ meteorite.Country }}</p>
      <p>MClass: {{ meteorite.MClass }}</p>
      <p>MGroup: {{ meteorite.MGroup }}</p>
      <p>Year Found: {{ meteorite.yearFound }}</p>
      <p>Weight: {{ meteorite.weight }}</p>
      <p>Loan Status: {{ meteorite.loanStatus }}</p>
    </li>
  </ul>
</template>

<script setup>
import { inject } from "vue";

const meteorites = inject("meteorites");
</script>
