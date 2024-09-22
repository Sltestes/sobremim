document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            sections.forEach(section => {
                section.classList.add("hidden");
            });
            const targetId = link.getAttribute("href");
            document.querySelector(targetId).classList.remove("hidden");
        });
    });

    // Exibir a primeira seção por padrão
    sections[0].classList.remove("hidden");
});
