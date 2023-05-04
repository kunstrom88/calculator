
function handleThemeChange() {
    const selectedTheme = document.querySelector('input[name="theme"]:checked').value;

    if (selectedTheme === 'dark') {
        document.documentElement.style.setProperty('--bg', 'radial-gradient(50% 30% ellipse at center top, #201e40 0%, #100a1c 100%)');
        document.documentElement.style.setProperty('--span-text', 'hsl(60, 100%, 99%)');
        document.documentElement.style.setProperty('--radio', 'hsl(133, 93%, 28%)');
        document.documentElement.style.setProperty('--title', 'hsl(60, 100%, 99%)');
        document.documentElement.style.setProperty('--calculator-bg', 'hsla(225, 100%, 10%, 1)');
        document.documentElement.style.setProperty('--calculator-bg-shadow', 'hsla(227, 47%, 19%, 1)');
        document.documentElement.style.setProperty('--screen', 'hsl(60, 8%, 7%)');
        document.documentElement.style.setProperty('--window', 'hsla(244, 63%, 17%, 1)');
        document.documentElement.style.setProperty('--plane', 'hsla(244, 61%, 25%, 1)');
        document.documentElement.style.setProperty('--placeholder', 'hsla(151, 100%, 52%, 1)');
        document.documentElement.style.setProperty('--screen-text', 'hsla(151, 100%, 52%, 1)');
        document.documentElement.style.setProperty('--btn-text', 'hsl(60, 100%, 99%)');
        document.documentElement.style.setProperty('--btn-bg-text', 'linear-gradient(90deg, #1c202c, hsl(228, 11%, 44%))');
        document.documentElement.style.setProperty('--btn-number', 'hsla(3, 44%, 62%, 1)');
        document.documentElement.style.setProperty('--btn-bg-number', 'linear-gradient(90deg, #2d2d2d, #4d4d4d)');
        document.documentElement.style.setProperty('--btn-operation', 'hsl(59, 85%, 60%)');
        document.documentElement.style.setProperty('--btn-bg-operation', 'linear-gradient(90deg, #ab5b15, #d29855)');
        document.documentElement.style.setProperty('--btn-bg-option', 'linear-gradient(90deg, #ac071a, #e06876)');
        document.documentElement.style.setProperty('--btn-bg-equal', 'linear-gradient(90deg, #054d87, #6eade1)');
        document.documentElement.style.setProperty('--btn-hover', 'hsla(0, 100%, 50%, 0.94)');
        document.documentElement.style.setProperty('--btn-active', 'hsla(0, 100%, 50%, 0.94)');

    } else if (selectedTheme=== 'light') {
        document.documentElement.style.setProperty('--bg', 'radial-gradient(50% 30% ellipse at center top, #d9e4d1 0%, #c2e1c8 100%)');
        document.documentElement.style.setProperty('--span-text', 'hsl(60, 8%, 7%)');
        document.documentElement.style.setProperty('--radio', 'hsl(245, 67%, 67%)');
        document.documentElement.style.setProperty('--title', 'hsl(60, 8%, 7%)');
        document.documentElement.style.setProperty('--calculator-bg', 'hsla(224, 51%, 86%, 1)');
        document.documentElement.style.setProperty('--calculator-bg-shadow', 'hsla(224, 8%, 55%, 1)');
        document.documentElement.style.setProperty('--screen', 'hsl(69, 24%, 59%)');
        document.documentElement.style.setProperty('--window', 'hsla(252, 2%, 47%, 1)');
        document.documentElement.style.setProperty('--plane', 'hsla(252, 0%, 55%, 1)');
        document.documentElement.style.setProperty('--placeholder', 'hsla(60, 8%, 7%)');
        document.documentElement.style.setProperty('--screen-text', 'hsla(151, 100%, 52%, 1)');
        document.documentElement.style.setProperty('--btn-text', 'hsl(0, 0%, 20%)');
        document.documentElement.style.setProperty('--btn-bg-text', 'linear-gradient(90deg, #e6e6e6, #fff)');
        document.documentElement.style.setProperty('--btn-number', 'linear-gradient(90deg, #2d2d2d, #4d4d4d)');
        document.documentElement.style.setProperty('--btn-bg-number', 'hsla(3, 44%, 62%, 1)');
        document.documentElement.style.setProperty('--btn-operation', 'hsl(60, 8%, 7%)');
        document.documentElement.style.setProperty('--btn-bg-operation', 'linear-gradient(90deg, #8ee7a7, #bfe7bc)');
        document.documentElement.style.setProperty('--btn-bg-option', 'linear-gradient(90deg, #93a155, #919b7f)');
        document.documentElement.style.setProperty('--btn-bg-equal', 'linear-gradient(90deg, #ebbf6f, #e1dd6e)');
        document.documentElement.style.setProperty('--btn-hover', 'hsla(0, 100%, 50%, 0.94)');
        document.documentElement.style.setProperty('--btn-active', 'hsla(224, 44%, 70%, 1)');

    } else if (selectedTheme === 'bright') {
        document.documentElement.style.setProperty('--bg', 'radial-gradient(50% 30% ellipse at center top, #FF00FF 0%, #00FFFF 100%)');
            document.documentElement.style.setProperty('--span-text', 'hsl(55, 95%, 50%)');
            document.documentElement.style.setProperty('--radio', 'hsl(240, 100%, 50%)');
            document.documentElement.style.setProperty('--title', 'hsl(55, 95%, 50%)');
            document.documentElement.style.setProperty('--calculator-bg', 'hsla(160, 100%, 70%, 1)');
            document.documentElement.style.setProperty('--calculator-bg-shadow', 'hsla(160, 60%, 50%, 1)');
            document.documentElement.style.setProperty('--screen', 'hsl(240, 95%, 60%)');
            document.documentElement.style.setProperty('--window', 'hsla(200, 90%, 50%, 1)');
            document.documentElement.style.setProperty('--plane', 'hsla(200, 100%, 55%, 1)');
            document.documentElement.style.setProperty('--placeholder', 'hsl(55, 95%, 50%)');
            document.documentElement.style.setProperty('--screen-text', 'hsla(50, 100%, 60%, 1)');
            document.documentElement.style.setProperty('--btn-text', '#00FF00');
document.documentElement.style.setProperty('--btn-bg-text', 'linear-gradient(90deg, #FF00FF, #00FFFF)');
document.documentElement.style.setProperty('--btn-number', 'linear-gradient(90deg, #FFD700, #FFA500)');
document.documentElement.style.setProperty('--btn-bg-number', '#FF00FF');
document.documentElement.style.setProperty('--btn-operation', 'hsl(300, 100%, 50%)');
document.documentElement.style.setProperty('--btn-bg-operation', 'linear-gradient(90deg, #FF00FF, #00FFFF)');
document.documentElement.style.setProperty('--btn-bg-option', '#FF1493');
document.documentElement.style.setProperty('--btn-bg-equal', 'linear-gradient(90deg, #FFD700, #00FF7F)');
document.documentElement.style.setProperty('--btn-hover', 'hsla(240, 100%, 75%, 1)');
document.documentElement.style.setProperty('--btn-active', 'hsla(240, 100%, 50%, 1)');
    }
}

const themeForm = document.querySelector('form');
themeForm.addEventListener('change', handleThemeChange);
