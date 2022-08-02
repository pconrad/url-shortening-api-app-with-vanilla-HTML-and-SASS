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
const statsSection = document.getElementById("stats-section")

const shortenUrl = async () =>
{
    const urlString = urlInput.value;
    let urlResponse = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlString}`)
    try 
    {
        if(!(urlResponse.ok))
        {
            const message = `An error has occurred: ${urlResponse.status}`;
            throw new Error(message);
        }
    }
    catch(error)
    {
        console.log(error);
        return;
    }
    let urlJson = await urlResponse.json();
    let urlObject = urlJson.result;
    console.log(urlObject);
}



const createUrlBlock = () =>
{
    console.log(statsSection.children)
}

createUrlBlock();