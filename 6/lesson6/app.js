const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello From Root!',
    counter: 0,
    tabs: ['one', 'two', 'three'],
    currentTab: 'one',
  },
  methods: {
    increase(data) {
      console.log(data);
      this.counter++;
    }
  },
  computed: {
    currentComponent() {
      return `component-${this.currentTab}`;
    }
  },
  mounted() {
    console.log('root', this);
  },
});
