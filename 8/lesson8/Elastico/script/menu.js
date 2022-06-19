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
        <button>Главная</button>
      </li>
      <li class="menu_catalog">
        <button v-on:click='showCat=!showCat'
                v-on:mouseleave='showCat=!showCat'
        >Каталог
          <ul v-if='!showCat'>
            <li><a href="#">Резиновые смеси</a></li>
            <li><a href="#">Подвеска</a></li>
            <li><a href="#">Другое</a></li>
          </ul>
        </button>
      </li>
      <li class="menu_contacts">
        <button v-on:click='showCont=!showCont'
                v-on:mouseleave='showCont=!showCont'
          >Контакты
          <ul v-if='!showCont'>
            <li><a href="#">Адрес и телефоны</a></li>
            <li><a href="#">Проезд</a></li>
            <li><a href="#">Обратная связь</a></li>
          </ul>
        </button>
      </li>
      <li class="menu_support">
        <button v-on:click='showSup=!showSup'
              v-on:mouseleave='showSup=!showSup'
          >Поддержка
          <ul v-if='!showSup'>
            <li><a href="#">Сервисные центры</a></li>
          </ul>
        </button>
      </li>
    </ul>
  </aside>`
})