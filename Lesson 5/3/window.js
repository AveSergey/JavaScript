const win = document.querySelector('.wrap');
const openWin = document.querySelector('button');
const closeWin = document.querySelector('span');

openWin.addEventListener('click', function () {
    win.classList.remove('hidden');
    win.classList.add('magictime', 'perspectiveDownReturn')
});

closeWin.addEventListener('click', function () {
    win.classList.add('hidden');
});