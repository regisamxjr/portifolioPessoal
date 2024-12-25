const translations = {
    "RÉGIS": "REGIS",
    "XAVIER": "XAVIER",
    "SOFTWARE DEVELOPER": "SOFTWARE DEVELOPER",
    "Minhas Habilidades": "My Skills",
    "JavaScript": "JavaScript",
    "CSS": "CSS",
    "HTML": "HTML",
    "GitHub": "GitHub",
    "Java": "Java",
    "Sobre Mim": "About Me",
    "Como estudante de engenharia de software e com grande interesse por tecnologia. Sou uma pessoa que adora enfrentar novos desafios e encontrar soluções criativas para problemas complexos. Com nível avançado de inglês, consigo me comunicar e compreender conteúdos técnicos com facilidade, o que tem me ajudado a expandir meu conhecimento e a me manter atualizado sobre as tendências do setor. Acredito que, apesar de estar no início da minha trajetória, minha determinação e vontade de aprender são fundamentais para meu crescimento profissional.": 
        "As a software engineering student with a great interest in technology, I am someone who loves to face new challenges and find creative solutions to complex problems. With an advanced level of English, I can communicate and understand technical content easily, which has helped me expand my knowledge and stay updated on industry trends. I believe that, despite being at the beginning of my journey, my determination and willingness to learn are fundamental to my professional growth.",
    "Meus Projetos": "My Projects",
    "Acesse o repositório no GitHub": "Access the repository on GitHub",
    "Este projeto é um site desenvolvido com HTML, CSS e JavaScript para uma escola de surfe...": 
        "This project is a website developed with HTML, CSS, and JavaScript for a surf school...",
    "Este é um projeto de uma calculadora simples desenvolvida utilizando HTML, CSS e JavaScript...": 
        "This is a project of a simple calculator developed using HTML, CSS, and JavaScript..."
};

// Função para traduzir o texto
function translatePage() {
    const currentLanguage = localStorage.getItem('language') || 'pt';
    const nextLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    localStorage.setItem('language', nextLanguage);

    const elementsToTranslate = document.querySelectorAll('h1, h2, h3, p, button, a');
    elementsToTranslate.forEach(element => {
        const originalText = element.innerText.trim();
        if (translations[originalText]) {
            element.innerText = translations[originalText];
        }
    });

    const translateButton = document.getElementById('translate-button');
    translateButton.setAttribute('aria-label', nextLanguage === 'en' ? 'Switch to Portuguese' : 'Switch to English');
}

// Aplica a tradução ao carregar a página, se necessário
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('language') === 'en') {
        translatePage();
    }

    const translateButton = document.getElementById('translate-button');
    translateButton.addEventListener('click', translatePage);
});