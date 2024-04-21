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

  </div>
</template>

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

<script setup>
import searchBar from "../components/searchBar.vue";
</script>
