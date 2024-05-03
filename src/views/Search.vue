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
    <Meteorites v-if="activeCategory === 'meteorite'" />
    <Loans v-if="activeCategory === 'loan'" />
    <SampleHistory v-if="activeCategory === 'sampleHistory'" />
  </div>

</template>

<script setup>
import { ref, provide } from 'vue';
import searchBar from "../components/searchBar.vue";
import Meteorites from "../components/meteorites.vue";
import Loans from "../components/loans.vue";
import SampleHistory from "../components/samplehistory.vue";
import { searchLoans } from '../apis/loans';
import { fetchMeteorites } from '../apis/meteorites';
import { fetchSampleHistory } from '../apis/sampleHistory';

const loans = ref([]);
const meteorites = ref([]);
const sampleHistory = ref([]);
const activeCategory = ref(''); // Tracks the active category

provide('loans', loans);
provide('meteorites', meteorites);
provide('sampleHistory', sampleHistory);

const performSearch = async ({ category, attribute, query }) => {
  activeCategory.value = category;
  console.log(activeCategory.value); // Check what value it holds when expected to show Meteorites
  if (category === 'meteorite') {
    const meteoriteResponse = await fetchMeteorites(attribute, query);
    meteorites.value = meteoriteResponse.data; // Ensure this matches the API response structure
    loans.value = [];
    sampleHistory.value = [];
    console.log("Meteorites loaded:", meteorites.value);
  } else if (category === 'sampleHistory') {
    meteorites.value = [];
    loans.value = [];
    const sampleHistoryResponse = await fetchSampleHistory(attribute, query);
    sampleHistory.value = sampleHistoryResponse.data;
    console.log("Sample History loaded:", sampleHistory.value);
  } else {
    meteorites.value = [];
    sampleHistory.value = [];
    const loansResponse = await searchLoans(attribute, query);
    loans.value = loansResponse.data;  // Ensure this matches the API response structure
    console.log("Loans loaded:", loans.value);
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