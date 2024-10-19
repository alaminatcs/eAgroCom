const bars = document.getElementById('bars');
const cross = document.getElementById('cross');
const smallMenu = document.getElementById('small-menu');

function openCross() {
    bars.classList.add('hidden');
    cross.classList.remove('hidden');
    smallMenu.classList.remove('hidden');
}

function openBars() {
    cross.classList.add('hidden');
    bars.classList.remove('hidden');
    smallMenu.classList.add('hidden');
}