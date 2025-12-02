const toggle = document.getElementById("menuToggle");
const panel = document.getElementById("menuPanel");
const mobileToggle = document.getElementById("mobileToggle");


toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    panel.classList.toggle("active");
    document.body.style.overflow = panel.classList.contains("active") ? "hidden" : "auto";
});


mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    panel.classList.toggle("active");
    document.body.style.overflow = panel.classList.contains("active") ? "hidden" : "auto";
});


document.querySelectorAll(".menu-card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if(link){
            window.location.href = link;
        }
    });
});


