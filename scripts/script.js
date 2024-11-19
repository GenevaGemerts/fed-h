document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('header > button');
    const header = document.querySelector('header');

    if (hamburgerButton && header) {
        hamburgerButton.addEventListener('click', () => {
            header.classList.toggle('open');
            console.log('Header toggled. Open state:', header.classList.contains('open'));

            if (header.classList.contains('open')) {
                createOverlay();
            } else {
                removeOverlay();
            }
        });
    }

    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay'); // Gebruikt CSS-klasse voor styling

        // Voegt een sluitknop toe
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.classList.add('close-btn'); // Gebruikt CSS-klasse voor styling
        closeButton.addEventListener('click', removeOverlay);

        overlay.appendChild(closeButton);

        // Pakt de list van de eerste nav en voegt deze toe aan de overlay
        const navList = document.querySelector('header > nav:nth-of-type(1) ul');
        if (navList) {
            const overlayNav = navList.cloneNode(true); // Maak een kopie van de lijst
            overlayNav.classList.add('overlay-nav'); // Gebruik CSS-klasse voor styling
            overlay.appendChild(overlayNav);
        }

        document.body.appendChild(overlay); // Voegt overlay toe aan 
        console.log('Overlay created and added.');
    }

    function removeOverlay() {
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.remove();
            console.log('Overlay removed.');
        }
        header.classList.remove('open');
    }
});


