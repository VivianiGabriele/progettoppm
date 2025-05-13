//scroll
document.getElementById('scroll-right').addEventListener('click', function () {
    const menu = document.querySelector('.overflow-scroll-wrapper');
    menu.scrollBy({left: 200, behavior: 'smooth'});
});
//comparsa menu' a tendina
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.toggle('active');
});
