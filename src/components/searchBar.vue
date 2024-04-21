<template>
  <form action="#" method="get" class="search-form">
    <label for="search"></label>
    <div class="search-bar">
      <select name="attributes" class="search-select">
        <option value="monnigNumber">Monnig Number</option>
        <option value="Name">Name</option>
        <option value="Country">Country</option>
        <option value="mClass">Class</option>
        <option value="mGroup">Group</option>
        <option value="yearFound">Year</option>
        <option value="weight">Weight</option>
        <option value="subsample">Subsample</option>
      </select>
      <input
        type="text"
        name="search"
        placeholder="Search"
        size="30"
        class="search-input"
      />
      <button>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </div>
  </form>
</template>

<style scoped>
.search-form {
  width: 40rem;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1.5px solid #242930;
  border-radius: 0.5em;
}

.search-select,
.search-input {
  position: relative;
  border: none;
  outline: none;
  height: 2.5rem;
  background-color: #010409;
}

.search-select {
  color: #D6D6D6;
  padding-left: 5px;
  border-right: 1px solid #242930;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}

.search-input {
  flex-grow: 1;
  padding: 0 10px;
}

button {
  color: #D6D6D6;
  border-radius: 0.5em;
  height: 2.5rem;
  width: 3em;
  border-left: 1.5px solid #242930;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #010409;
  cursor: pointer;
  transition: border-color 0.25s;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

button:hover {
  filter: brightness(110%);
}
.search-select:hover {
  filter: brightness(110%);
}
</style>

<script>
export default {
  name: "SearchBar",
};
</script>
