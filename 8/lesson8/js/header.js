Vue.component('header-el', {
  template: `
  <header class="header">
  <div class="header__container _container">
      <div class="header__logo">
          <a class="header__logo-img">
              <img src="img/logo.png" alt="logo">
          </a>
          <button class="header__logo-search">
            <img src="img/search.png" alt="">
          </button>
      </div>
      <div class="menu">
          <div>
              <ul class="menu__list">
                  <li class="menu__item menu__catalog">
                      <a href="#" class="menu__link"><img src="img/menu.svg" alt="img"></a>
                  </li>
                  <li class="menu__item menu__user">
                      <a href="html/regBemBootstrap.html" class="menu__link"><img src="img/user.svg" alt="img"></a>
                  </li>
                  <li class="menu__item menu__basket">
                      <a href="html/cart.html" class="menu__link"><img src="img/basket.svg" alt="img"></a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</header>
  `
})