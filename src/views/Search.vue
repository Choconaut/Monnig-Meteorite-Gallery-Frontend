<template>
  <div class="topBar">
    <div class="leftGroup">
      <img class="logo" src="/cometL.png" />
      <label class="meteorLabel">Monnig Meteorite Gallery</label>
    </div>

    <searchBar class="centerItem" />

    <div  class="rightGroup">
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
        {{ loan.loaneeName }}
      </li>
    </ul>
    <h3>Meteors</h3>
    <ul>
      <li v-for="meteor in meteorites" :key="meteor.monnigNumber">
        {{ meteor.MonnigNumber }}
      </li>
    </ul>
    <h4>All Meteors</h4>
    <ul>
      <li v-for="meteors in meteorites" :key="meteors.monnigNumber">
        {{ meteors.monnigNumber }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import searchBar from "../components/searchBar.vue";
import { ref, onMounted } from 'vue';
import { fetchLoans } from '../apis/loans';
import { fetchMeteoriteId } from "../apis/meteorites"; // Update the path as necessary
import { fetchAllMeteorite } from "../apis/meteorites";

const loans = ref([]);
const meteorites = ref([]);
const sampleHistory = ref([]);

onMounted(async () => {
  try {
    const response = await fetchLoans();
    loans.value = response.data;
    console.log("Loans loaded:", loans.value); // This will help confirm the data structure
  } catch (error) {
    console.error('Failed to load loans:', error);
  }
});

onMounted(async () => {
  try {
    const response = await fetchMeteoriteId();
    meteorites.value = response.data;
    console.log("Meteors loaded:", meteorites.value);
  } catch (error) {
    console.error('Failed to load meteorites:', error);
  }
});

onMounted(async () => {
  try {
    const response = await fetchAllMeteorite();
    meteorites.value = response.data;
    console.log("All Meteors loaded:", meteorites.value);
  } catch (error){
    console.error('Failed to load all meteorites:', error);
  }
});



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