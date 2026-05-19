// Ano automático no rodapé
    document.getElementById("year").textContent = new Date().getFullYear();

    // Scroll suave para elementos com atributo data-scroll-to
    document.querySelectorAll("[data-scroll-to]").forEach(function (el) {
      el.addEventListener("click", function () {
        var target = document.querySelector(this.getAttribute("data-scroll-to"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
          // se menu mobile estiver aberto, fechar ao clicar
          var nav = document.querySelector('nav');
          var hamburger = document.querySelector('.hamburger');
          if (nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

    // Toggle do menu hamburger (mobile)
    var hamburgerBtn = document.querySelector('.hamburger');
    var navEl = document.querySelector('nav');
    if (hamburgerBtn && navEl) {
      hamburgerBtn.addEventListener('click', function (e) {
        var isOpen = navEl.classList.toggle('open');
        // Atualiza atributo aria-expanded
        hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // fechar ao clicar fora do menu
      document.addEventListener('click', function (e) {
        if (!navEl.contains(e.target) && navEl.classList.contains('open')) {
          navEl.classList.remove('open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Botão principal "Fazer pedido" - exemplo de redirecionamento
    document.getElementById("btnFazerPedido").addEventListener("click", function () {
      // Substitua a URL pelo link real do seu cardápio online / app de pedidos
      window.location.href = "https://contatei.com.br/loja/kasarao";
    });

    // Botão WhatsApp na seção CTA
    document.getElementById("btnWhatsApp").addEventListener("click", function () {
      // Mesma URL ou outra, conforme sua necessidade
      window.location.href = "https://api.whatsapp.com/send?phone=5531971966163&text=Ol%C3%A1%2C%20vim%20do%20site%20do%20Kasar%C3%A3o%20Hamburgueria%20e%20quero%20fazer%20um%20pedido!";
    });

    // Botão de definir rota no Google Maps
    var btnLocation = document.getElementById("btnLocation");
    if (btnLocation) {
      btnLocation.addEventListener("click", function () {
        window.open("https://www.google.com/maps/place/Kasar%C3%A3o+Hamburgueria/@-19.6532127,-43.213569,17z/data=!3m1!4b1!4m6!3m5!1s0xa5a1d9511b63f1:0x8842da20e6d7e3d2!8m2!3d-19.6532178!4d-43.2109887!16s%2Fg%2F11lcdvqgz8?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D", "_blank");
      });
    }

    const burgerCards = document.querySelectorAll('.burger-card');
    if (burgerCards.length) {
      let activeBurger = 0;
      const rotateBurgers = function () {
        burgerCards.forEach(function (card, index) {
          card.classList.toggle('active', index === activeBurger);
        });
        activeBurger = (activeBurger + 1) % burgerCards.length;
      };
      rotateBurgers();
      setInterval(rotateBurgers, 3600);
    }