function hamburger() {
    　　document.getElementById('line1').classList.toggle('linea');
    　　document.getElementById('line2').classList.toggle('lineb');
    　　document.getElementById('line3').classList.toggle('linec');
    　　document.getElementById('target').classList.toggle('slidex');
    　　document.getElementById('menubar-s').classList.toggle('fadein');
}
    
document.getElementById('target').addEventListener('click', function () {
　　hamburger();
});

let list = document.getElementsByClassName('menulist');

for (let i = 0; i < list.length; i++) {
　　list[i].addEventListener('click', function () {
　　　　hamburger();
    });
}