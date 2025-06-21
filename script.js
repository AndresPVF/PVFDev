// Animaciones al scrollear
const screens = document.querySelectorAll(".screen");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, {
  threshold: 0.1 // aparece apenas entra al viewport
});

screens.forEach(sec => observer.observe(sec));

// Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});

document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-btn.left');
    const nextBtn = carousel.querySelector('.carousel-btn.right');
    
    let index = 0;
  
    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % items.length;
      updateCarousel();
    });
  });
  
  const element = document.getElementById("typewriter");
const phrases = [
  'Print("Roblox Scripter & Animator")',
  'Print("UI Animations")',
  'if client:IsA("LegendaryScripter") then return end',
  'Print("Cutscenes Maker")',
  'Print("Optimized Systems")',
  'local success = pcall(function() return GreatDeveloper("AndresPVF") end)',
  'workspace:SetAttribute("Talent", "100%")',
  'if bug then print("It works anyway") end',
  'while task.wait() do brain:Execute("NewIdeas") end',
  'if deadline == today then panic() end',
  'if UI:IsClean() then print("Satisfying.") end',
  'if coffee == nil then TakeBreak() end',
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let delay = 100;

function typeLoop() {
  const current = phrases[currentPhrase];
  element.textContent = current.slice(0, currentChar);

  if (!isDeleting) {
    currentChar++;
    if (currentChar === current.length + 1) {
      isDeleting = true;
      delay = 1600; // espera antes de borrar
    } else {
      delay = 50 + Math.random() * 50; // simula escritura humana
    }
  } else {
    currentChar--;
    if (currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      delay = 500;
    } else {
      delay = 30;
    }
  }

  setTimeout(typeLoop, delay);
}

typeLoop();
