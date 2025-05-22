/* Mock d'un skeloton loader + avec logic TrackReveal */
document.addEventListener("DOMContentLoaded", () => {
    const delay = 1500;
    const section = document.querySelector("#maps-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    document.querySelectorAll(".skeleton").forEach(loader => {
                        loader.classList.remove("skeleton", "skeleton-text");
                        loader.textContent = loader.getAttribute("data-content");
                    });
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    });

    if (section) {
        observer.observe(section); // track la section
    }
});