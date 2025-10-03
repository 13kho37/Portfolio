const projets = [
    {
        title: "Développement web full stack",
        description:"Création d’un site web d’équipe avec HTML/CSS, PHP et MySQL.",
        features: ["Design responsive", "Mode sombre", "pages dynamiques reliées à une BDD", "gestion d’authentification"],
        image: "assets/carousel_web.jpeg",
        link: "web_project.html"
    },
    {
        title: "Administration et supervision réseau",
        description:"Création d'un réseau de machines virtuelles avec Proxmox et OpnSense",
        features: ["Virtualisation de machine", "Configuration de proxy et reverse proxy", "Administration windows server (DHCP, DNS, AD)", "Configuration de wazuh"],
        image: "assets/carousel_reseau.webp",
        link: "reseau_project.html"
    },
    {
        title: "IoT / Systèmes embarqués",
        description:"Développement d’un système de lecture de badges RFID avec un ESP32, relié à une API pour gérer les autorisations",
        features: ["ESP-32", "Framework arduino", "Communication avec une API", "Module RFID RC522"],
        image: "assets/iot_carousel.jpg",
        link: "iot_project.html"
    },
    {
        title: "Premiers pas en reverse engineering",
        description:"Analyse d'un objet connecté pour comprendre son fonctionnement et ses failles de sécurité",
        features: ["Démontage matériel et inspection du PCB", "Identification des composants électroniques", "Récupération et analyse des interfaces (UART, SPI, etc.)"],
        image: "assets/reverse_carousel.jpg",
        link: "reverse_project.html"
    }
];

const projectContainer = document.getElementById('project-container');

document.addEventListener('DOMContentLoaded', () => {
    createProjectCard(window.innerWidth); 
});

function createProjectCard(screenSize) {
    if (screenSize < 768) {
        projectContainer.innerHTML = '';
        projets.forEach((projet) => {
            projectContainer.innerHTML += `
            <div class="carousel-item ${projectContainer.innerHTML === '' ? 'active' : ''}">
                <div class="row justify-content-center">
                    <div class="col-md-5 p-5">
                        <div class="card d-flex flex-column mb-3 h-100">
                            <img src="${projet.image}" class="card-img-top img-fluid" style="height:200px; object-fit:cover;" alt="${projet.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title mb-2">${projet.title}</h5>
                                <p class="card-text mb-3">
                                    <u>${projet.description}</u><br>
                                    Fonctionnalités : ${projet.features.join(", ")}<br>
                                </p>
                                <a href="${projet.link}" class="btn btn-primary mt-auto">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
    } else {
        projectContainer.innerHTML = '';
        for (let i = 0; i < projets.length; i += 2) {
            const projet1 = projets[i];
            const projet2 = projets[i + 1];

            projectContainer.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <div class="card d-flex flex-column mb-3 h-100">
                            <img src="${projet1.image}" class="card-img-top" alt="${projet1.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title mb-2">${projet1.title}</h5>
                                <p class="card-text mb-3">
                                    <u>${projet1.description}</u><br>
                                    Fonctionnalités : ${projet1.features.join(", ")}<br>
                                </p>
                                <a href="${projet1.link}" class="btn btn-primary mt-auto">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card d-flex flex-column mb-3 h-100">
                                <img src="${projet2.image}" class="card-img-top" alt="${projet2.title}">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title mb-2">${projet2.title}</h5>
                                    <p class="card-text mb-3">
                                        <u>${projet2.description}</u><br>
                                        Fonctionnalités : ${projet2.features.join(", ")}<br>
                                    </p>
                                    <a href="${projet2.link}" class="btn btn-primary mt-auto">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            `;
        }
    }
}
