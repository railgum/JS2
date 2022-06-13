Vue.component("error-api", {
  props: ["error"],
  data() {
    return {
      isShow: false,
      errMessage: "",
    };
  },
  methods: {
    showError(error) {
      this.isShow = true;
      this.errMessage = error;
    },
  },
  template: `<div class="error-api" v-show="isShow" >
								<p class="error-text">Ошибка HTTP: {{errMessage}}</p>
								<button class="btn-closeError" @click="isShow = !isShow">&times;</button>
						 </div>
						 `,
});
