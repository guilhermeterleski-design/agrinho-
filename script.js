// DADOS DINÂMICOS
const pilares = [
    { title: "Preservação", desc: "Monitoramento de biomas em tempo real." },
    { title: "Eficiência", desc: "Uso racional de recursos hídricos e solo." },
    { title: "Tecnologia", desc: "IA aplicada à produtividade sustentável." }
];

const tecnologias = [
    { title: "Plantio Direto", content: "Técnica que evita a erosão e mantém nutrientes." },
    { title: "Drones e Sensores", content: "Aplicação precisa de insumos, reduzindo desperdício." }
];

// RENDERIZAÇÃO
function init() {
    const cardContainer = document.getElementById('cards-container');
    const accordionContainer = document.getElementById('accordion-container');

    // Render Cards
    pilares.forEach(item => {
        cardContainer.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    // Render Accordion
    tecnologias.forEach((item, index) => {
        accordionContainer.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(${index})">
                    ${item.title}
                </button>
                <div class="accordion-content" id="acc-${index}">
                    <p>${item.content}</p>
                </div>
            </div>
        `;
    });

    setupScrollReveal();
}

// ACESSIBILIDADE: FONTE E CONTRASTE
function changeFontSize(action) {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base') || 16);
    if (action === 'increase') root.style.fontSize = (currentSize + 2) + "px";
    if (action === 'decrease') root.style.fontSize = (currentSize - 2) + "px";
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// COMPONENTE: ACORDEÃO
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    contents[index].classList.toggle('active');
}

// SCROLL REVEAL (Observer API)
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));
}

// CARROSSEL SIMPLIFICADO
let currentSlide = 0;
document.querySelector('.next').addEventListener('click', () => {
    const track = document.getElementById('carousel-track');
    currentSlide = (currentSlide + 1) % 3; // Supondo 3 slides
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// Inicialização
window.onload = init;
