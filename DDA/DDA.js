const burgermenuButton = document.querySelector('.burgermenu');

burgermenuButton.addEventListener("click", openMenu);

function openMenu(){
    const deNav = document.querySelector(".header-rechts");
    deNav.classList.toggle("burgermenu-open");
}

const  sluitButton = document.querySelector("burgermenu-open");