const mobileHero = document.getElementById("hero-image")
const mobileNavContainer = document.getElementById("mobile-container")
const hamburgerIconOpen = document.getElementById("hamburger-icon-open");
const hamburgerIconClose = document.getElementById("hamburger-icon-close");

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

const urlInputContainer =document.getElementById("url-input-container")
const urlInput = document.getElementById("url");
const listOfUrls = document.getElementById("url-list")
const error = document.getElementById("error")
let firstLink = true;

const validateUrl = (urlString) =>
{
    if(urlString.includes(".com") || urlString.includes(".net") || 
    urlString.includes(".gov") || urlString.includes(".org"))
    {
        urlString = urlString.slice(urlString.indexOf("."), urlString.length);
        if(urlString === ".com" || urlString === ".net" ||
        urlString === ".gov" || urlString === ".org")
        {
            console.log(urlString);
            urlInputContainer.style.border = "none";
            error.innerHTML = "";
            return true;
        }
        else
        {
            urlInputContainer.style.border = "1px solid red";
            error.innerHTML = "Please add a valid link";
            return false;
        }
    }
     else if(urlString === "")
    {
        urlInputContainer.style.border = "1px solid red";
        error.innerHTML = "Please add a link";
        return false;
    }
    else
    {
        urlInputContainer.style.border = "1px solid red";
        error.innerHTML = "Please add a valid link";
        return false;
    }
}


let clone = document.getElementById("url-container").cloneNode(true);
const createUrlBlock = (urlObject) =>
{
    if(!(validateUrl(urlObject.original_link)))
    {
        return;
    }
    let urlBlock = document.getElementById("url-container")
    if(firstLink)
    {
        urlBlock.style.display = "flex";
        firstLink = false;
    }
    else
    {
        urlBlock = clone.cloneNode(true);
        urlBlock.style.marginTop = "0px";
        listOfUrls.appendChild(urlBlock);
    }
    urlBlock.children[0].innerHTML = urlObject.original_link;
    urlBlock.children[1].children[0].innerHTML = urlObject.short_link;
    urlBlock.style.display = "flex";
}

const shortenUrl = async () =>
{
    let urlString = urlInput.value;
    console.log("urlString=",urlString);
    let urlResponse = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlString}`)
    console.log("urlResponse=",urlResponse);

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
        return;
    }
    let urlJson = await urlResponse.json();
    let urlObject = urlJson.result;
    createUrlBlock(urlObject);
}


const copyLink = (button) =>
{
    let urlContainer = button.parentNode;
    navigator.clipboard.writeText(urlContainer.children[0].innerHTML);
    button.innerHTML = "Copied!";
    button.style.backgroundColor = "hsl(257, 27%, 26%)";
}

const shortenButton = document.getElementById("shorten-button");
shortenButton.addEventListener("click", shortenUrl);
