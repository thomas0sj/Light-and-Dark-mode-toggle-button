let tgl = document.getElementById('toggle');

tgl.addEventListener('click', darkMode);

function darkMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}