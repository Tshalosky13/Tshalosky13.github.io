// Holiday Theme System
const holidayThemes = {
    halloween: {
        dates: { month: 9, startDay: 1, endDay: 31 }, // October
        particles: { type: 'bat', color: '#ff6b1a', count: 15 }
    },
    thanksgiving: {
        dates: { month: 10, startDay: 1, endDay: 30 }, // November
        particles: { type: 'leaf', color: '#d2691e', count: 20 }
    },
    winter: {
        dates: { month: 11, startDay: 1, endDay: 31 }, // December
        particles: { type: 'snow', color: '#ffffff', count: 50 }
    },
    valentine: {
        dates: { month: 1, startDay: 7, endDay: 14 }, // Feb 7-14
        particles: { type: 'heart', color: '#ff69b4', count: 15 }
    },
    stpatrick: {
        dates: { month: 2, startDay: 10, endDay: 17 }, // March 10-17
        particles: { type: 'clover', color: '#90ee90', count: 15 }
    },
    birthday: {
        dates: { month: 5, startDay: 6, endDay: 13 }, // June 6-13
        particles: { type: 'confetti', color: '#ffd700', count: 30 }
    },
    july4th: {
        dates: { month: 6, startDay: 1, endDay: 4 }, // July 1-4
        particles: { type: 'firework', color: '#ff6b6b', count: 20 }
    }
};

let currentTheme = 'none';
let themeMode = 'auto';
let intensity = 'subtle';
let particleInterval = null;

function getCurrentHoliday() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    for (const [theme, config] of Object.entries(holidayThemes)) {
        if (month === config.dates.month &&
            day >= config.dates.startDay &&
            day <= config.dates.endDay) {
            return theme;
        }
    }
    return 'none';
}

function applyTheme(theme) {
    // Remove all theme classes
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();

    if (theme !== 'none') {
        document.body.classList.add(`theme-${theme}`);
    }

    currentTheme = theme;
    updateThemeDisplay();

    if (intensity === 'full' && theme !== 'none') {
        startParticles(theme);
    } else {
        stopParticles();
    }
}

function updateThemeMode() {
    const mode = document.querySelector('input[name="themeMode"]:checked').value;
    themeMode = mode;

    const manualSelect = document.getElementById('manualThemeSelect');
    manualSelect.style.display = mode === 'manual' ? 'block' : 'none';

    if (mode === 'auto') {
        applyTheme(getCurrentHoliday());
    } else if (mode === 'off') {
        applyTheme('none');
    } else if (mode === 'manual') {
        applyManualTheme();
    }

    savePreferences();
}

function applyManualTheme() {
    const theme = document.getElementById('themeSelector').value;
    applyTheme(theme);
    savePreferences();
}

function updateIntensity() {
    intensity = document.querySelector('input[name="intensity"]:checked').value;
    updateThemeDisplay();

    if (currentTheme !== 'none') {
        if (intensity === 'full') {
            startParticles(currentTheme);
        } else {
            stopParticles();
        }
    }

    savePreferences();
}

function updateThemeDisplay() {
    document.getElementById('currentThemeDisplay').textContent =
        currentTheme === 'none' ? 'Default' : currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
    document.getElementById('currentIntensityDisplay').textContent =
        intensity.charAt(0).toUpperCase() + intensity.slice(1);
}

// Particle Effects
function createParticle(theme) {
    const container = document.getElementById('particles');
    const particle = document.createElement('div');
    particle.className = 'particle';

    const config = holidayThemes[theme].particles;
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 20 + 10;

    particle.style.left = startX + 'px';
    particle.style.top = '-20px';
    particle.style.fontSize = size + 'px';

    // Set particle character based on type
    const symbols = {
        bat: '🦇',
        leaf: '🍂',
        snow: '❄️',
        heart: '💕',
        clover: '🍀',
        confetti: '🎊',
        firework: '🎆'
    };

    particle.textContent = symbols[config.type] || '⭐';

    container.appendChild(particle);

    // Animate particle falling
    let posY = -20;
    let currentX = startX;
    const fallSpeed = Math.random() * 2 + 1;
    const drift = (Math.random() - 0.5) * 2;

    const fall = setInterval(() => {
        posY += fallSpeed;
        currentX += drift;
        particle.style.top = posY + 'px';
        particle.style.left = currentX + 'px';

        if (posY > window.innerHeight) {
            clearInterval(fall);
            particle.remove();
        }
    }, 50);
}

function startParticles(theme) {
    stopParticles();
    const config = holidayThemes[theme].particles;

    particleInterval = setInterval(() => {
        if (document.querySelectorAll('.particle').length < config.count) {
            createParticle(theme);
        }
    }, 300);
}

function stopParticles() {
    if (particleInterval) {
        clearInterval(particleInterval);
        particleInterval = null;
    }
    document.getElementById('particles').innerHTML = '';
}

// Save preferences to localStorage
function savePreferences() {
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('intensity', intensity);
    if (themeMode === 'manual') {
        localStorage.setItem('manualTheme', currentTheme);
    }
}

// Load preferences from localStorage
function loadPreferences() {
    const savedMode = localStorage.getItem('themeMode');
    const savedIntensity = localStorage.getItem('intensity');

    if (savedMode) {
        themeMode = savedMode;
        document.querySelector(`input[value="${savedMode}"]`).checked = true;
        if (savedMode === 'manual') {
            const savedTheme = localStorage.getItem('manualTheme');
            if (savedTheme) {
                document.getElementById('themeSelector').value = savedTheme;
            }
        }
        updateThemeMode();
    }

    if (savedIntensity) {
        intensity = savedIntensity;
        document.querySelector(`input[name="intensity"][value="${savedIntensity}"]`).checked = true;
        updateIntensity();
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    applyTheme(getCurrentHoliday());
    updateThemeDisplay();
});

// Load saved preferences on startup
window.addEventListener('DOMContentLoaded', loadPreferences);