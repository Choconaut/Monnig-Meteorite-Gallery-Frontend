<template>
  <form @submit.prevent="onSearch" class="search-form">
    <div class="search-bar">
      <select v-model="selectedCategory" class="search-select" @change="updateAttributes">
        <option value="meteorite">Meteorite</option>
        <option  value="loan">Loan</option> <!-- add v-if="isAuthenticated" Must be authenicated to view-->
        <option  value="sampleHistory">Sample History</option>
      </select>
      <select v-model="selectedAttribute" class="search-select">
        <option v-for="attribute in currentAttributes" :value="attribute.value" :key="attribute.value">
          {{ attribute.text }}
        </option>
      </select>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        size="30"
        class="search-input"
      />
      <button type="submit">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      selectedCategory: "meteorite",       // Default category
      selectedAttribute: "monnigNumber", // Default attribute
      searchQuery: "",
      attributes:{
        meteorite: [
          {value: "monnigNumber", text: "Monnig Number"},
          {value: "name", text: "Name"},
          {value: "country", text: "Country"},
          {value: "MClass", text: "Class"},
          {value: "MGroup", text: "Group"},
          {value: "yearFound", text: "Year Found"},
          {value: "weight", text: "Weight"},
          {value: "loanStatus", text: "Loan Status"}
        ],

        loan: [
          {value: "loanId", text: "Loan ID"},
          {value: "loaneeName", text: "Name"},
          {value: "loaneeEmail", text: "Email"},
          {value: "loaneeInstitution", text: "Institution"},
          {value: "loaneeAddress", text: "Address"},
          {value: "loanStartdate", text: "Start Date"},
          {value: "loanDuedate", text: "Due Date"},
          {value: "trackingNumber", text: "Tracking Number"},
          {value: "status", text: "Status"}
        ],

        sampleHistory: [
          {value: "sampleHistoryId", text: "Sample History Id"},
          {value: "sampleDate", text: "Sample Date"},
          {value: "sampleCategory", text: "Sample Category"},
          {value: "sampleNotes", text: "Sample Notes"}
        ]
      }
    };
  },
  computed: {
    currentAttributes() {
      return this.attributes[this.selectedCategory];
    },
    // isAuthenticated() {
    //   return auth.isLoggedIn(); // Ensure this method returns the authentication state
    // }
  },
  methods: {
    updateAttributes() {
      if (this.currentAttributes.length > 0) {
        this.selectedAttribute = this.currentAttributes[0].value;
      }
    },
    onSearch() {
      this.$emit('search', {
        category: this.selectedCategory,
        attribute: this.selectedAttribute,
        query: this.searchQuery
      });
    }
  },
  mounted() {
    this.updateAttributes(); // Set initial attributes when the component mounts
  }
};
</script>

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
  color: #D6D6D6;
  padding-left: 5px;
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
