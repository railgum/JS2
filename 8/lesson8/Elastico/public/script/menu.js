Vue.component('menu-el', {
  data(){
    return {
      showCat: true,
      showCont: true,
      showSup: true,
    }
  },
  //methods: {
  //  showElem() {
  //    this.showElemEvent = !this.showElemEvent;
  //  }
  //},
  template: `
  <aside class="menu">          
    <ul>
      <li class="menu_primary">
        <a href=#>Главная</a>
      </li>
      <li class="menu_catalog">
        <a href="html/catalog.html">Каталог</a>
      </li>
      <li class="menu_contacts">
        <a href="html/contacts.html">Контакты</a>
      </li>
      <li class="menu_support">
        <a href=#>Поддержка</a>
      </li>
    </ul>
  </aside>`
})