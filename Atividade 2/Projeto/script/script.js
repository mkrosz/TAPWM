document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar nav ul li a");
  const sections = document.querySelectorAll(".content");

  function setActiveLink() {
    let scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        sidebarLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `.sidebar nav ul li a[href="#${section.id}"]`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

  setActiveLink();
  // Curiosidades - Mostrar/Ocultar Seção
  const botaoCuriosidades = document.querySelectorAll(".bloco-curiosidades");
  const curiosidades = document.querySelectorAll(".curiosidades");
  
  botaoCuriosidades.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      curiosidades[index].classList.toggle("ativo");
    });
  });
  
});
