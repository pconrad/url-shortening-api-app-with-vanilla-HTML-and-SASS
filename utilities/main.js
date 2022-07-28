const mobileHero = document.getElementById("hero-image")
const mobileNavContainer = document.getElementById("mobile-container")
const hamburgerIconOpen = document.getElementById("hamburger-icon-open");
const hamburgerIconClose = document.getElementById("hamburger-icon-close");

console.log(mobileHero)
console.log(mobileNavContainer)
console.log(hamburgerIconOpen)
console.log(hamburgerIconClose)

const toggleOpen = () =>
{
    hamburgerIconOpen.style.display = "none";
    hamburgerIconClose.style.display = "block";
    mobileHero.style.display = "none";
    mobileNavContainer.style.display = "block";
}

const toggleClose = () =>
{
    hamburgerIconOpen.style.display = "block";
    hamburgerIconClose.style.display = "none";
    mobileHero.style.display = "block";
    mobileNavContainer.style.display = "none";
}

const urlInput = document.getElementById("url");

const shortenUrl = () =>
{
    const urlString = urlInput.value;
}