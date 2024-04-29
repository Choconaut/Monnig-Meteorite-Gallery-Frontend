<template>
  <div class="topBar">
    <div class="leftGroup">
      <img class="logo" src="/cometL.png" />
      <label class="meteorLabel">Monnig Meteorite Gallery</label>
    </div>

    <searchBar @search="performSearch" />

    <div class="centerRightGroup">
      <router-link :to="{ name: 'home'}" class="homeLink">
        <span>Home</span>
      </router-link>
    </div>

    <div class="rightGroup">
      <router-link :to="{ name: 'login' }" class="loginLink">
        <span>Login</span>
      </router-link>
    </div>
    
<!--Id, name, country -->

  </div>
  <div>
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
import searchBar from "../components/searchBar.vue";
import { ref } from 'vue';
import { searchLoans } from '../apis/loans';
import { fetchMeteorites } from '../apis/meteorites';
import {fetchSampleHistory} from '../apis/sampleHistory';

const loans = ref([]);
const meteorites = ref([]);
const sampleHistory = ref([]);

const performSearch = async ({ category, attribute, query }) => {
  // console.log("Category:", category);
  // console.log("Attribute:", attribute);    // Used to check the values being passed before beginning function.
  // console.log("Query:", query);
  try {
    if(category === 'meteorite'){
      const meteoriteResponse = await fetchMeteorites(attribute, query);
      meteorites.value = meteoriteResponse.data; //Ensure this matches the API response structure
      loans.value = null;
      sampleHistory.value = null;
      console.log("Meteorites loaded:", meteorites.value);
    } else if(category === 'sampleHistory'){
      loans.value = null;
      meteorites.value = null;
      const sampleHistoryResponse = await fetchSampleHistory(attribute, query);
      sampleHistory.value = sampleHistoryResponse.data;
      console.log("Sample History loaded:", sampleHistory.value);
    } else {
      const loansResponse = await searchLoans(attribute, query);
      loans.value = loansResponse.data;  // Ensure this matches the API response structure
      meteorites.value = null;
      sampleHistory.value = null;
      console.log("Loans loaded:", loans.value); // Log to confirm data structure
    }
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

.homeLink {
  color: #F6F6F6;
  text-decoration: none;
}

.topBar {
  display: flex;
  align-items: center;
  width: 97%;
  height: 2.5rem;
  padding: 1rem;
  background-color: #131921;
}

.leftGroup, .rightGroup , .centerRightGroup{
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

.centerRightGroup{
  justify-content: flex-end;
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