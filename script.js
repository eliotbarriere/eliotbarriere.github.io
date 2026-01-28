// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleImage');
    const resultImage = document.getElementById('resultImage');

    if (toggleButton && resultImage) {
        let isImageVisible = true;

        toggleButton.addEventListener('click', function() {
            if (isImageVisible) {
                resultImage.style.opacity = '0';
                toggleButton.textContent = "Afficher l'image";
                setTimeout(() => {
                    resultImage.style.display = 'none';
                }, 500);
            } else {
                resultImage.style.display = 'block';
                setTimeout(() => {
                    resultImage.style.opacity = '1';
                }, 10);
                toggleButton.textContent = "Masquer l'image";
            }
            isImageVisible = !isImageVisible;
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab");
    const projects = document.querySelectorAll(".project");

    if (!tabs.length || !projects.length) {
        console.warn("Onglets ou projets non trouvés");
        return;
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            projects.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");

            const projectName = tab.dataset.project;
            const projectSection = document.getElementById("project-" + projectName);

            if (projectSection) {
                projectSection.classList.add("active");
            } else {
                console.error("Section introuvable :", projectName);
            }
        });
    });
});
