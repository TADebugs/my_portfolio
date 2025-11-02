import './styles.css';
import { initMatrixRain } from './matrix.js';

// Initialize page state - ensures everything is visible on load/back navigation
function initializePage() {
    const choiceScreen = document.getElementById('choiceScreen');
    const redOutcome = document.getElementById('redOutcome');
    const blueOutcome = document.getElementById('blueOutcome');

    // Reset choice screen to visible state
    if (choiceScreen) {
        choiceScreen.style.display = 'block';
        choiceScreen.style.opacity = '1';
        choiceScreen.style.transition = 'opacity 1s ease-in';
    }

    // Hide outcome screens
    if (redOutcome) {
        redOutcome.classList.remove('active');
        redOutcome.style.display = 'none';
    }

    if (blueOutcome) {
        blueOutcome.classList.remove('active');
        blueOutcome.style.display = 'none';
    }

    // Initialize matrix rain effect
    initMatrixRain();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    // DOM already loaded (e.g., back navigation)
    initializePage();
}

// Handle page visibility changes (back/forward navigation)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page became visible again (e.g., user navigated back)
        initializePage();
    }
});

// Handle pageshow event (fires on back/forward navigation)
window.addEventListener('pageshow', (event) => {
    // If page was loaded from cache (back navigation)
    if (event.persisted) {
        initializePage();
    }
});

// Pill choice logic
function choosePill(color) {
    const choiceScreen = document.getElementById('choiceScreen');
    
    if (!choiceScreen) return;
    
    // Add transition effect
    choiceScreen.style.opacity = '0';
    choiceScreen.style.transition = 'opacity 1s ease-out';
    
    setTimeout(() => {
        // Redirect based on pill choice
        if (color === 'red') {
            // Red pill → Good Look Portfolio (deeper dive - 3D Island Adventure)
            // Update this URL to match your actual Vercel deployment URL
            const redPillUrl = 'https://my-portfolio-rho-blush-81.vercel.app';
            // Alternative: If deploying from same repo, use relative path:
            // const redPillUrl = '../good_look_page';
            window.location.href = redPillUrl;
        } else {
            // Blue pill → Quick Look Portfolio (space theme)
            // Update this URL to match your actual Vercel deployment URL
            const bluePillUrl = 'https://my-portfolio-c33x.vercel.app';
            // Alternative: If deploying from same repo, use relative path:
            // const bluePillUrl = '../quick_look_page';
            window.location.href = bluePillUrl;
        }
    }, 1000); // Wait for fade out animation
}

function goBack() {
    const choiceScreen = document.getElementById('choiceScreen');
    const redOutcome = document.getElementById('redOutcome');
    const blueOutcome = document.getElementById('blueOutcome');

    if (choiceScreen) {
        choiceScreen.style.display = 'block';
        choiceScreen.style.opacity = '1';
        choiceScreen.style.transition = 'opacity 1s ease-in';
    }

    if (redOutcome) {
        redOutcome.classList.remove('active');
        redOutcome.style.display = 'none';
    }

    if (blueOutcome) {
        blueOutcome.classList.remove('active');
        blueOutcome.style.display = 'none';
    }
}

// Make functions available globally for onclick handlers
window.choosePill = choosePill;
window.goBack = goBack;

