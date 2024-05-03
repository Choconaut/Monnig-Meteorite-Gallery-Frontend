<template>
  <div class="topBar">
    <div class="leftGroup">
      <img class="logo" src="/cometL.png" />
      <label class="meteorLabel">Monnig Meteorite Gallery</label>
    </div>

    <div class="centerGroup">
      <router-link :to="{ name: 'search' }" class="searchLink">
        <span>Search</span>
      </router-link>
    </div>

    <div class="rightGroup">
      <router-link :to="{ name: 'login' }" class="loginLink">
        <span>Login</span>
      </router-link>
    </div>
  </div>

  <div>
    <h1>All Meteorites</h1>
    <ul>
      <li v-for="meteorite in meteorites" :key="meteorite.monnigNumber">
        <h3>Meteorite ID: {{ meteorite.monnigNumber }}</h3>
        <p>Name: {{ meteorite.Name }}</p>
        <p>Country: {{ meteorite.Country }}</p>
        <p>MClass: {{ meteorite.MClass }}</p>
        <p>MGroup: {{ meteorite.MGroup }}</p>
        <p>Year Found: {{ meteorite.yearFound }}</p>
        <p>Weight: {{ meteorite.weight }}</p>
        <p>Loan Status: {{ meteorite.loanStatus }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {fetchAllMeteorites} from "../apis/meteorites.js";

const meteorites = ref([]);

onMounted(async () => {
  try {
    const response = await fetchAllMeteorites();
    meteorites.value = response.data.content;
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

.searchLink{
  color: #f6f6f6;
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

.centerGroup{
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