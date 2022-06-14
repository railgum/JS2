Vue.component('brand-el', {
  template: `<div class="brand">
  <div class="brand__inside">
      <div class="brand__inside-left">
          <img src="img/header_img.png" alt="">
      </div>
      <div class="brand__inside-right">
          <div class="brand__inside-text">
              <div class="brand__inside-title">THE BRAND</div>
              <div class="brand__inside-subtitle">OF LUXERIOUS <span>FASHION</span></div>
          </div>
      </div>
  </div>
  <div class="brand__outside _padblock">
      <!-- menu -->
      <div class="catalog">
          <img src="img/exit.svg" alt="" class="catalog__exit">
          <div class="catalog__title">MENU</div>
          <div class="catalog__subtitle">
              <div class="catalog__subtitle-label">MAN</div>
              <a href="html/catalog.html">Accessories</a>
              <a href="#">Bags</a>
              <a href="#">Denim</a>
              <a href="#">T-Shirts</a>
          </div>
          <div class="catalog__subtitle">
              <div class="catalog__subtitle-label">WOMAN</div>
              <a href="#">Accessories</a>
              <a href="#">Jackets & Coats</a>
              <a href="#">Polos</a>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
          </div>
          <div class="catalog__subtitle">
              <div class="catalog__subtitle-label">KIDS</div>
              <a href="#">Accessories</a>
              <a href="#">Jackets & Coats</a>
              <a href="#">Polos</a>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Bags</a>
          </div>
      </div>
  </div>
</div>`
})