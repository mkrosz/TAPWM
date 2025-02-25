document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar nav ul li a");
  const sections = document.querySelectorAll(".content");

  function setActiveLink() {
      let scrollPosition = window.scrollY + 100; // Considera um pequeno ajuste

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              sidebarLinks.forEach(link => link.classList.remove("active")); // Remove a classe de todos os links
              const activeLink = document.querySelector(`.sidebar nav ul li a[href="#${section.id}"]`);
              if (activeLink) activeLink.classList.add("active"); // Adiciona a classe ao link correspondente
          }
      });
  }

  // Destaca o item correto ao rolar a página
  window.addEventListener("scroll", setActiveLink);

  // Destaca corretamente quando a página carrega
  setActiveLink();
});
