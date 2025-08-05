(() => {
  const THEME_KEY = 'theme';
  const MODE_KEY = 'mode';
  const DEFAULT_THEME = 'neobrutalist';
  const DEFAULT_MODE = 'light';

  function applyTheme(theme, mode) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
  }

  function savePreferences(theme, mode) {
    localStorage.setItem(THEME_KEY, theme);
    localStorage.setItem(MODE_KEY, mode);
  }

  function updateTriggerIcon(activeTheme) {
    const icons = document.querySelectorAll('[data-icon-for]');
    icons.forEach(icon => {
      if (icon.getAttribute('data-icon-for') === activeTheme) {
        icon.setAttribute('data-active', 'true');
      } else {
        icon.setAttribute('data-active', 'false');
      }
    });
  }

  const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  const savedMode = localStorage.getItem(MODE_KEY) || DEFAULT_MODE;
  applyTheme(savedTheme, savedMode);

  function attachEventListeners() {
    const modeToggle = document.getElementById('mode-toggle');
    const themeSwitcher = document.getElementById('theme-switcher-container');
    const themeTrigger = document.getElementById('theme-switcher-trigger');
    const themeOptions = document.getElementById('theme-options');

    // Sincroniza el ícono al cargar la página
    updateTriggerIcon(savedTheme);

    // Listener para el botón de modo
    modeToggle?.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
      const newMode = document.documentElement.getAttribute('data-mode') === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme, newMode);
      savePreferences(currentTheme, newMode);
    });

    // Listener para abrir/cerrar el menú de temas
    themeTrigger?.addEventListener('click', () => {
      const currentState = themeSwitcher.getAttribute('data-state');
      themeSwitcher.setAttribute('data-state', currentState === 'closed' ? 'open' : 'closed');
    });
    
    // Listeners para los botones dentro del menú
    themeOptions?.addEventListener('click', (e) => {
        const targetButton = e.target.closest('[data-theme-button]');
        if (!targetButton) return;

        const newTheme = targetButton.getAttribute('data-theme-button');
        const currentMode = document.documentElement.getAttribute('data-mode') || DEFAULT_MODE;

        applyTheme(newTheme, currentMode);
        savePreferences(newTheme, currentMode);
        updateTriggerIcon(newTheme);
        themeSwitcher.setAttribute('data-state', 'closed'); // Cierra el menú al elegir
    });
    
    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', (e) => {
      if (!themeSwitcher?.contains(e.target)) {
        themeSwitcher.setAttribute('data-state', 'closed');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachEventListeners);
  } else {
    attachEventListeners();
  }
})();