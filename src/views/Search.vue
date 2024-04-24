<template>
  <div class="topBar">
    <div class="leftGroup">
      <img class="logo" src="/cometL.png" />
      <label class="meteorLabel">Monnig Meteorite Gallery</label>
    </div>

    <searchBar @search="performSearch" />

    <div class="rightGroup">
      <router-link :to="{ name: 'login' }" class="loginLink">
        <span>Login</span>
      </router-link>
    </div>
    
  </div>
  <div>
    <h1>Home</h1>
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
import searchBar from "../components/searchBar.vue";
import { ref } from 'vue';
import { searchLoans } from '../apis/loans'; // Assuming this function is properly exported

const loans = ref([]);

const performSearch = async ({ attribute, query }) => {
  try {
    const response = await searchLoans(attribute, query);
    loans.value = response.data;  // Ensure this matches the API response structure
    console.log("Loans loaded:", loans.value); // Log to confirm data structure
  } catch (error) {
    console.error('Search failed:', error);
  }
};

</script>

<style scoped>
.loginLink{
  color: #F6F6F6;
  text-decoration: none;
}

.topBar {
  display: flex;
  align-items: center;
  width: 98%;
  height: 2.5rem;
  padding: 1rem;
  background-color: #131921;
}

.leftGroup, .rightGroup {
  flex: 1;
  display: flex;
  align-items: center;
  padding-right: 5px;
}

.leftGroup {
  justify-content: flex-start;
}

.rightGroup {
  justify-content: flex-end;
}

.centerItem{
  justify-content: center;
}

.logo {
  width: 2.5rem;
  height: 2.5rem;
}

.meteorLabel {
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-family: "Roboto", "Segoe UI", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .meteorLabel {
    font-size: 1rem;
  }
}
</style>