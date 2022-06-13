Vue.component('component-one', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi delectus ducimus ex in laudantium, nam qui sunt temporibus veritatis vitae. Aliquam eaque et ipsam nemo odit similique voluptate!</div>`
});
Vue.component('component-two', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto at aut blanditiis culpa cum dignissimos doloribus eaque, esse hic incidunt laboriosam mollitia nihil, placeat quae qui quidem ut!</div>`
});
Vue.component('component-three', {
    template: `<div>Lorem ipsum dolor sit amet, ptate!</div>`
});

const childElement = {
    name: 'child-element',
    template: '<span>some in child component</span>',
};

Vue.component('some-el', {
    props: ['title', 'counter', 'increase'],
    data() {
        return {
            // title: 'Hello Component!',
            counterCopy: this.counter,
        };
    },
    components: {
      childElement,
    },
    mounted() {
        // console.log(this.$attrs);
    },
    template: `<div>
<!--                    <div>{{ title }}</div>-->
<!--                    <button @click="counter++">{{ counter }}</button>-->
<!--                    <button @click="counterCopy++">{{ counterCopy }}</button>-->
<!--                    <button @click="$root.counter++">{{ counter }}</button>-->
<!--                    <button @click="$root.increase()">{{ counter }}</button>-->
<!--                    <button @click="increase('some data')">{{ counter }}</button>-->
<!--                    <button @click="$emit('increase', 'some data')">{{ counter }}</button>-->
                    <slot/>
                    <child-element></child-element>
                    <slot>
                        Default data
                    </slot>
                </div>`,
});

// Vuex
// VueRouter
