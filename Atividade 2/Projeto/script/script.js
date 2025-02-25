document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar nav ul li a");
    const sections = document.querySelectorAll(".content");

    function setActiveLink() {
        let scrollPosition = window.scrollY + 100; // Ajuste para compensar a header fixa

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

    // Adiciona rolagem suave ao clicar nos itens da sidebar
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute("href").substring(1); // Obtém o ID da seção alvo
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajusta para não cobrir a seção com a header
                    behavior: "smooth" // Adiciona rolagem suave
                });
            }
        });
    });

    // Destaca o item correto ao rolar a página
    window.addEventListener("scroll", setActiveLink);

    // Destaca corretamente quando a página carrega
    setActiveLink();
});
