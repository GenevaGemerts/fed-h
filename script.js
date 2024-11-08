// JavaScript Document
console.log("hi");

// Selecteer de hamburger, menu-elementen, overlay en sluitknop
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.bottom-nav');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

// Wanneer de hamburgerknop wordt geklikt, toon het menu en de overlay
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');  // Menu zichtbaar maken/verbergen
    overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; // Overlay zichtbaar maken
    hamburger.classList.toggle('active');  // Verander hamburger naar kruisje
});

// Wanneer het kruisje wordt geklikt, verberg het menu en de overlay
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');  // Menu verbergen
    overlay.style.display = 'none';  // Overlay verbergen
    hamburger.classList.remove('active');  // Verander kruisje terug naar hamburger
});

// Ook wanneer je op de overlay zelf klikt, moet het menu en de overlay worden gesloten
overlay.addEventListener('click', (e) => {
    // Zorg ervoor dat alleen de overlay zelf wordt geklikt om te sluiten, niet het menu
    if (e.target === overlay) {
        menu.classList.remove('active');
        overlay.style.display = 'none';
        hamburger.classList.remove('active');
    }
});
