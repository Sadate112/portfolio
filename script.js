// Animation du texte d'intro dynamique
const typedText = document.getElementById("typed-text");
const phrases = [
  "Développeur Full Stack & Android",
  "Créateur de solutions digitales modernes",
  "Passionné par le code et l'innovation"
];
let index = 0;

function type() {
  let text = phrases[index];
  let i = 0;
  typedText.textContent = "";
  const interval = setInterval(() => {
    typedText.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      setTimeout(() => {
        index = (index + 1) % phrases.length;
        type();
      }, 2500);
    }
  }, 80);
}
window.onload = type;

// Navbar effet scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Charger les projets GitHub
const username = "Sadate112";
fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    const projectList = document.getElementById("project-list");
    data.forEach(repo => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
        <div class="card bg-black border-gold shadow-lg h-100">
          <div class="card-body">
            <h5 class="card-title text-gold fw-bold">${repo.name}</h5>
            <p class="card-text text-white-50">${repo.description || "Aucune description."}</p>
            <a href="${repo.html_url}" target="_blank" class="btn btn-gold">Voir sur GitHub</a>
          </div>
        </div>`;
      projectList.appendChild(card);
    });
  });

