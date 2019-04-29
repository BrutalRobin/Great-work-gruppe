const hamburgerMenu = document.getElementById('hambrugerMenu'); //Select hambrugerMenu id
const hambrugerMenuClose = document.getElementById('hambrugerMenuClose'); //Select hambrugerMenuClose id
const mobileMenu = document.getElementById('mobileNavigation'); //Select mobileNavigation id

hamburgerMenu.onclick = function () { // Onclick function. Open mobile navigation
    mobileMenu.classList = "mobileNavigationOpen"; // Add class
}
hambrugerMenuClose.onclick = function () { // Onclick function. Close mobile navigation
    mobileMenu.classList = "mobileNavigationClosed"; // Add class
}