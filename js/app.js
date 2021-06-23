document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const open = document.getElementById('nav-toggler');
    const close = document.getElementById('close');

    open.addEventListener('click', toggleNav);
    close.addEventListener('click', toggleNav);

    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
}

function toggleNav() {
    const navbarContent = document.getElementById('navbar-content');
    navbarContent.classList.toggle('open-nav')
}