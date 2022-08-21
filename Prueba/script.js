const email = document.querySelector('.navbar-email');
const DMenu = document.querySelector('.desktop-menu');

email.addEventListener('click',toggleDMenu);


function toggleDMenu() {
        DMenu.classList.toggle('inactive');
}
/*
const menuDesktop = document.querySelector('.inactive')
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
});
*/