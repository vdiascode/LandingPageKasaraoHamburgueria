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
        }
      });
    });

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