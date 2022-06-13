Vue.component("search", {
  props: ["filter"],
  data() {
    return {
      userSearch: this.userSearch,
    };
  },
  template: `
		<form action="#" class="search-form" @input.prevent="$emit('filter', userSearch)">
			<input type="text" class="search-field" v-model="userSearch" />
			<button class="btn-search" type="submit">
				<i class="fas fa-search"></i>
			</button>
		</form>
	`,
});
